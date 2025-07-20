from pydantic import BaseModel


class BondYieldModel(BaseModel):
    value: float
