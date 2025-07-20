from __future__ import annotations

from pydantic import BaseModel, ConfigDict, RootModel


class NumericValueModel(BaseModel):
    model_config = ConfigDict(
        extra='forbid',
    )
    unit: str
    value: float


class Model(RootModel[NumericValueModel]):
    root: NumericValueModel
