from typing import Any

from lib_shared.core.utils.base_model import BaseModel


class Product(BaseModel):
    title: str = ""
    price: str = ""
    category: list[str] = []
    rating: str = ""
    url: str = ""
    metadata: dict[str, Any] = dict[str, Any]()

    def to_flat_dict(self) -> dict[str, Any]:
        d = self.model_dump(exclude={"metadata"})
        d.update(self.metadata)
        return d


class CategorySchema(BaseModel):
    name: str
    common_fields: list[str] = ["title", "price", "rating", "rank"]
    specific_fields: list[str] = []


class WorkflowState(BaseModel):
    phase: str  # TODOL to enum
    current_index: int = 0
    errors: list[str] = []
    products: list[Product] = []
    retry_count: int = 0
    schemas: dict[str, CategorySchema] = dict()
    urls: list[dict[str, str]] = []
