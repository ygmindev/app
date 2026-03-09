import json
import logging
import re

from langchain_ollama import ChatOllama

from models import CategorySchema

logger = logging.getLogger(__name__)


def _llm() -> ChatOllama:
    return ChatOllama(
        model="llama3.2",
        temperature=0,
        num_predict=256,
        seed=42,
    )


# ---------- Deterministic category mapping (primary path) ----------

_CATEGORY_KEYWORDS: dict[str, str] = {
    "electronics": "Electronics",
    "computers": "Electronics",
    "phone": "Electronics",
    "camera": "Electronics",
    "audio": "Electronics",
    "headphone": "Electronics",
    "book": "Books",
    "kindle": "Books",
    "home": "Home & Kitchen",
    "kitchen": "Home & Kitchen",
    "garden": "Home & Kitchen",
    "furniture": "Furniture",
    "toy": "Toys",
    "game": "Toys",
    "clothing": "Clothing",
    "fashion": "Clothing",
    "shoe": "Clothing",
    "apparel": "Clothing",
    "beauty": "Beauty",
    "personal care": "Beauty",
    "health": "Beauty",
    "sport": "Sports",
    "outdoor": "Sports",
    "fitness": "Sports",
    "grocery": "Food",
    "food": "Food",
    "gourmet": "Food",
    "tool": "Tools",
    "hardware": "Tools",
    "improvement": "Tools",
    "baby": "Baby",
    "pet": "Pet Supplies",
    "automotive": "Automotive",
    "office": "Office",
    "software": "Software",
    "movie": "Movies",
    "music": "Music",
    "video game": "Video Games",
}

VALID_CATEGORIES = {
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
    "Baby",
    "Pet Supplies",
    "Automotive",
    "Office",
    "Software",
    "Movies",
    "Music",
    "Video Games",
}


def classify_product(title: str, raw_data: dict) -> str:
    """
    Classify product. Deterministic keyword match first (fast, reliable).
    LLM fallback only if keywords fail.
    """
    # Source 1: Amazon's own breadcrumb category
    search_text = ""
    if raw_data.get("category"):
        search_text = raw_data["category"].lower()

    # Source 2: title
    search_text += " " + title.lower()

    # Keyword match
    for keyword, cat in _CATEGORY_KEYWORDS.items():
        if keyword in search_text:
            return cat

    # LLM fallback (simple single-word answer)
    try:
        resp = _llm().invoke(
            f"What product category is this? Reply with ONE word only.\n"
            f"Product: {title[:100]}\n"
            f"Category:"
        )
        answer = resp.content.strip().split("\n")[0].strip().strip("\"'.,")
        # Map LLM answer to valid category
        answer_lower = answer.lower()
        for cat in VALID_CATEGORIES:
            if cat.lower() in answer_lower or answer_lower in cat.lower():
                return cat
    except Exception as e:
        logger.warning(f"LLM classify failed: {e}")

    return "Other"


# ---------- Schema inference ----------

_COMMON_FIELDS = frozenset(
    {
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
        "asin",
        "url",
    }
)


def infer_category_schema(category: str, raw_data: dict) -> CategorySchema:
    """
    Determine which extracted fields are category-specific.
    Deterministic heuristic first, LLM to refine.
    """
    candidate_fields = [k for k in raw_data if k not in _COMMON_FIELDS]

    if not candidate_fields:
        return CategorySchema(name=category)

    # Heuristic: fields with dimensional/physical info are usually relevant
    # Just pick all non-common fields up to 8 — they came from the product
    # detail table so they ARE category-relevant by definition
    selected = candidate_fields[:8]

    # Optional LLM refinement: ask which are most important
    if len(candidate_fields) > 5:
        try:
            resp = _llm().invoke(
                f"Category: {category}\n"
                f"Fields: {json.dumps(candidate_fields)}\n"
                f"Pick the 5 most important fields for this category. "
                f'Reply with ONLY a JSON array like ["f1","f2"]'
            )
            match = re.search(r"\[.*?\]", resp.content, re.DOTALL)
            if match:
                parsed = json.loads(match.group())
                valid = [f for f in parsed if isinstance(f, str) and f in raw_data]
                if valid:
                    selected = valid[:8]
        except Exception as e:
            logger.debug(f"LLM schema refinement failed (using heuristic): {e}")

    return CategorySchema(name=category, specific_fields=selected)


def suggest_recovery_action(dom_snapshot: str, problem: str) -> dict:
    try:
        resp = _llm().invoke(
            f"Problem: {problem}\n"
            f"Page DOM:\n{dom_snapshot[:2000]}\n\n"
            f"Suggest ONE action. Reply with JSON only:\n"
            f'{{"action": "click", "selector": "CSS_SELECTOR_HERE"}}\n'
            f'or {{"action": "scroll"}}\n'
            f'or {{"action": "skip"}}'
        )
        match = re.search(r"\{.*?\}", resp.content, re.DOTALL)
        if match:
            parsed = json.loads(match.group())
            if parsed.get("action") in ("click", "scroll", "skip"):
                return parsed
    except Exception:
        pass

    return {"action": "scroll"}  # safe default
