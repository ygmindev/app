from pydantic import BaseModel


class BondPriceModel(BaseModel):
    value: float
    is_dirty: bool = False
