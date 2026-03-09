import asyncio
import json
import logging
from datetime import datetime

from graph import build_graph
from models import WorkflowState
from tools import BrowserManager

logger = logging.getLogger(__name__)


async def run(
    max_products: int = 3,
    output_file: str = "bestsellers_output.json",
):
    app = build_graph(max_products=max_products)
    initial = WorkflowState(phase="navigate")

    try:
        final = await app.ainvoke(initial)
        products = final.get("products", [])
        schemas = final.get("schemas", {})
        errors = final.get("errors", [])
        results = {
            "metadata": {
                "timestamp": datetime.now().isoformat(),
                "total_products": len(products),
                "total_errors": len(errors),
                "categories": list(schemas.keys()),
            },
            "schemas": {
                n: {"common": s.common_fields, "specific": s.specific_fields}
                for n, s in schemas.items()
            },
            "products": [p.to_flat_dict() for p in products],
            "errors": errors,
        }
        with open(output_file, "w") as f:
            json.dump(results, f, indent=2, default=str)
        return results
    finally:
        await BrowserManager.close()


def main():
    asyncio.run(run())


if __name__ == "__main__":
    main()
