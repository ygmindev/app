import json
import logging
import re

from langchain.agents import create_agent
from langchain_ollama import ChatOllama

from models import CategorySchema, Product
from tools import NAVIGATOR_TOOLS, SCRAPER_TOOLS

logger = logging.getLogger(__name__)


def _get_llm() -> ChatOllama:
    return ChatOllama(
        model="llama3.2",
        temperature=0,
        num_predict=1024,
    )


# ---------------------------------------------------------------------------
# Agent 1: Navigator — explores the bestsellers page using tools
# ---------------------------------------------------------------------------
NAVIGATOR_SYSTEM = """You are a web navigation agent. Your job is to find product links on Amazon's Best Sellers page.

You have these tools:
- navigate_to_url: go to a URL
- scroll_down: scroll page to load more content
- click_element: click a button/link using CSS selector
- get_page_snapshot: see the page DOM structure
- get_page_text: read the page text
- extract_product_links: extract all product links from current page

INSTRUCTIONS:
1. Navigate to the given URL
2. Scroll down 2-3 times to load more products
3. Call extract_product_links to get all product URLs
4. If you got fewer than 5 links, try scrolling more and extracting again
5. Return the final list of product links

Be efficient. Don't call unnecessary tools."""


def create_navigator_agent():
    """Create the navigator ReAct agent."""
    llm = _get_llm()
    return create_agent(
        llm,
        tools=NAVIGATOR_TOOLS,
        system_prompt=NAVIGATOR_SYSTEM,
    )


# ---------------------------------------------------------------------------
# Agent 2: Scraper — visits each product page and extracts data
# ---------------------------------------------------------------------------
SCRAPER_SYSTEM = """You are a product data extraction agent. Your job is to extract all product information from an Amazon product page.

You have these tools:
- navigate_to_url: go to the product URL
- scroll_down: scroll to reveal more product details
- get_page_snapshot: see the page structure
- extract_product_data: extract all product fields from the page

INSTRUCTIONS:
1. Navigate to the given product URL
2. Scroll down once to load the full page
3. Call extract_product_data to get all fields
4. If critical fields are missing (no title or no price), try scrolling more and extracting again
5. Return the extracted data

Be efficient. Usually navigate + scroll + extract is enough."""


def create_scraper_agent():
    """Create the scraper ReAct agent."""
    llm = _get_llm()
    return create_agent(
        llm,
        tools=SCRAPER_TOOLS,
        system_prompt=SCRAPER_SYSTEM,
    )


# ---------------------------------------------------------------------------
# Non-agent LLM calls (simple classification, no tool-calling needed)
# ---------------------------------------------------------------------------
CATEGORY_PROMPT = """Classify this product into exactly ONE category:
Electronics, Books, Home & Kitchen, Toys, Clothing, Beauty, Sports, Food, Furniture, Tools, Other

Product: {title}

Reply with ONLY the category name."""


def classify_product(title: str, raw_data: dict) -> str:
    """Classify product — tries deterministic first, LLM as fallback."""
    if raw_data.get("category"):
        cat = raw_data["category"].split(">")[0].strip().lower()
        mapping = {
            "electronics": "Electronics",
            "books": "Books",
            "home": "Home & Kitchen",
            "kitchen": "Home & Kitchen",
            "toys": "Toys",
            "clothing": "Clothing",
            "fashion": "Clothing",
            "beauty": "Beauty",
            "sports": "Sports",
            "grocery": "Food",
            "food": "Food",
            "furniture": "Furniture",
            "tools": "Tools",
            "health": "Beauty",
            "garden": "Home & Kitchen",
        }
        for keyword, mapped in mapping.items():
            if keyword in cat:
                return mapped

    try:
        llm = _get_llm()
        resp = llm.invoke(CATEGORY_PROMPT.format(title=title))
        result = resp.content.strip().strip("\"'")
        valid = {
            "Electronics",
            "Books",
            "Home & Kitchen",
            "Toys",
            "Clothing",
            "Beauty",
            "Sports",
            "Food",
            "Furniture",
            "Tools",
            "Other",
        }
        for v in valid:
            if v.lower() in result.lower():
                return v
        return "Other"
    except Exception:
        return "Other"


SCHEMA_PROMPT = """Category: "{category}"
Available fields from product page: {fields}

Which fields are SPECIFIC to "{category}"? (NOT title, price, rating, brand, rank, review_count, features, image_url, category)

Reply with ONLY a JSON array: ["field1", "field2"]
If none are specific, reply: []"""


def infer_category_schema(category: str, raw_data: dict) -> CategorySchema:
    """Pick category-specific fields from extracted data."""
    common = {
        "title",
        "price",
        "rating",
        "rank",
        "brand",
        "review_count",
        "features",
        "image_url",
        "category",
        "error",
    }
    available = [k for k in raw_data if k not in common]

    if not available:
        return CategorySchema(name=category)

    try:
        llm = _get_llm()
        resp = llm.invoke(
            SCHEMA_PROMPT.format(category=category, fields=json.dumps(available))
        )
        match = re.search(r"\[.*?\]", resp.content, re.DOTALL)
        if match:
            fields = [
                f
                for f in json.loads(match.group())
                if isinstance(f, str) and f in raw_data
            ]
            return CategorySchema(name=category, specific_fields=fields[:8])
    except Exception as e:
        logger.warning(f"Schema inference failed: {e}")

    return CategorySchema(name=category, specific_fields=available[:5])


def build_product(url: str, raw_data: dict, schema: CategorySchema) -> Product:
    """Deterministic: map raw data to Product using schema."""
    extra = {f: raw_data[f] for f in schema.specific_fields if f in raw_data}
    return Product(
        title=raw_data.get("title", ""),
        price=raw_data.get("price", ""),
        category=[schema.name],
        rating=raw_data.get("rating", ""),
        url=url,
        rank=raw_data.get("rank", ""),
        extra_fields=extra,
    )
