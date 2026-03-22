import logging

from langgraph.graph import END, StateGraph

from llm_helpers import classify_product, infer_category_schema, suggest_recovery_action
from models import Product, WorkflowState
from tools import (
    click_selector,
    extract_product_data,
    extract_product_links,
    get_dom_snapshot,
    navigate,
    scroll_down,
)

logger = logging.getLogger(__name__)

MAX_PRODUCTS = 3
MIN_LINKS = 3
MAX_RETRIES = 2


# ---------------------------------------------------------------------------
# Node: Navigate to bestsellers
# ---------------------------------------------------------------------------
async def node_navigate(state: WorkflowState) -> WorkflowState:
    logger.info("── Step 1: Navigate to bestsellers ──")
    title = await navigate("https://www.amazon.com/gp/bestsellers")
    logger.info(f"Page: {title}")
    state.phase = "scroll_and_extract"
    state.retry_count = 0
    return state


# ---------------------------------------------------------------------------
# Node: Scroll and extract links (deterministic)
# ---------------------------------------------------------------------------
async def node_scroll_and_extract(state: WorkflowState) -> WorkflowState:
    logger.info("── Step 2: Scroll and extract product links ──")

    # Scroll a few times to load content
    for i in range(3):
        await scroll_down(700)
        logger.info(f"  Scrolled ({i + 1}/3)")

    links = await extract_product_links()
    logger.info(f"  Found {len(links)} product links")

    state.urls = links
    state.phase = "check_results"
    return state


# ---------------------------------------------------------------------------
# Node: Check if we got enough links — LLM helps recover if not
# ---------------------------------------------------------------------------
async def node_check_results(state: WorkflowState) -> WorkflowState:
    links = state.urls
    retries = state.retry_count

    if len(links) >= MIN_LINKS:
        logger.info(f"  ✓ Got {len(links)} links, proceeding")
        state.urls = links[:MAX_PRODUCTS]
        state.current_index = 0
        state.phase = "process_product"
        return state

    if retries >= MAX_RETRIES:
        logger.warning(
            f"  ✗ Only {len(links)} links after {retries} retries, proceeding anyway"
        )
        state.urls = links[:MAX_PRODUCTS]
        state.current_index = 0
        state.phase = "process_product" if links else "finalize"
        return state

    # We have too few links. Ask LLM to look at the page and suggest what to do.
    logger.info(
        f"  Only {len(links)} links (need {MIN_LINKS}). Asking LLM for recovery..."
    )

    snapshot = await get_dom_snapshot(max_elements=100)
    suggestion = suggest_recovery_action(
        snapshot,
        f"Found only {len(links)} product links on Amazon bestsellers page. "
        f"Need at least {MIN_LINKS}. What should I do to find more products?",
    )

    action = suggestion.get("action", "scroll")
    logger.info(f"  LLM suggests: {suggestion}")

    if action == "click" and suggestion.get("selector"):
        clicked = await click_selector(suggestion["selector"])
        logger.info(f"  Clicked '{suggestion['selector']}': {clicked}")
    elif action == "scroll":
        await scroll_down(1200)
    # else: skip → will proceed with what we have on next retry check

    state.retry_count = retries + 1
    state.phase = "scroll_and_extract"  # try extraction again
    return state


# ---------------------------------------------------------------------------
# Node: Process one product (navigate + extract + classify + schema + build)
# ---------------------------------------------------------------------------
async def node_process_product(state: WorkflowState) -> WorkflowState:
    idx = state.current_index
    urls = state.urls

    if idx >= len(urls):
        state.phase = "finalize"
        return state

    item = urls[idx]
    url = item["url"]
    logger.info(f"── Product {idx + 1}/{len(urls)}: {item.get('title', '')[:50]} ──")

    try:
        # Step A: Navigate (deterministic)
        await navigate(url, wait_ms=2000)

        # Step B: Scroll to load details (deterministic)
        await scroll_down(500)

        # Step C: Extract all fields (deterministic)
        raw = await extract_product_data()
        if not raw or ("error" in raw and len(raw) == 1):
            # Recovery: scroll more and retry once
            await scroll_down(800)
            raw = await extract_product_data()

        if not raw.get("title"):
            raise ValueError("Could not extract product title")

        logger.info(f"  Fields: {list(raw.keys())[:8]}")

        # Step D: Classify (deterministic keywords + LLM fallback)
        category = classify_product(raw.get("title", ""), raw)
        logger.info(f"  Category: {category}")

        # Step E: Schema (deterministic heuristic + LLM refinement)
        schemas = state.schemas
        if category not in schemas:
            schema = infer_category_schema(category, raw)
            schemas[category] = schema
            logger.info(f"  New schema for '{category}': {schema.specific_fields}")
        else:
            schema = schemas[category]

        # Step F: Build product (fully deterministic)
        extra = {f: raw[f] for f in schema.specific_fields if f in raw}
        product = Product(
            title=raw.get("title", ""),
            price=raw.get("price", ""),
            category=[category],
            rating=raw.get("rating", ""),
            url=url,
            rank=raw.get("rank", ""),
            extra_fields=extra,
        )
        state.products.append(product)
        logger.info(f"  ✓ {product.title[:40]} | {product.price}")

    except Exception as e:
        err = f"Product {idx + 1} ({url}): {e}"
        logger.error(f"  ✗ {err}")
        state.errors.append(err)

    state.current_index = idx + 1
    state.phase = "process_product" if idx + 1 < len(urls) else "finalize"
    return state


# ---------------------------------------------------------------------------
# Node: Finalize
# ---------------------------------------------------------------------------
async def node_finalize(state: WorkflowState) -> WorkflowState:
    logger.info("── Finalize ──")
    logger.info(f"  Products: {len(state.products)}")
    logger.info(f"  Errors: {len(state.errors)}")
    logger.info(f"  Schemas: {list(state.schemas.keys())}")
    state.phase = "done"
    return state


# ---------------------------------------------------------------------------
# Router
# ---------------------------------------------------------------------------
def route(state: WorkflowState) -> str:
    mapping = {
        "scroll_and_extract": "node_scroll_and_extract",
        "check_results": "node_check_results",
        "process_product": "node_process_product",
        "finalize": "node_finalize",
        "done": END,
    }
    return mapping.get(state.phase, END)


# ---------------------------------------------------------------------------
# Build graph
# ---------------------------------------------------------------------------
def build_graph(max_products: int = 3):
    g = StateGraph[WorkflowState, None, WorkflowState, WorkflowState](WorkflowState)

    g.add_node("node_navigate", node_navigate)
    g.add_node("node_scroll_and_extract", node_scroll_and_extract)
    g.add_node("node_check_results", node_check_results)
    g.add_node("node_process_product", node_process_product)
    g.add_node("node_finalize", node_finalize)

    g.set_entry_point("node_navigate")

    g.add_conditional_edges("node_navigate", route)
    g.add_conditional_edges("node_scroll_and_extract", route)
    g.add_conditional_edges("node_check_results", route)
    g.add_conditional_edges("node_process_product", route)
    g.add_conditional_edges("node_finalize", route)

    return g.compile()
