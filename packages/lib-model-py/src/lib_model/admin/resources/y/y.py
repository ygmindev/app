from __future__ import annotations

from pydantic import BaseModel, ConfigDict, RootModel


class YModel(BaseModel):
    model_config = ConfigDict(
        extra='forbid',
    )
    y1: float
    y2: str


class Model(RootModel[YModel]):
    root: YModel
