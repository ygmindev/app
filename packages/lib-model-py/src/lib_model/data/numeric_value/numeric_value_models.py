from __future__ import annotations

from enum import Enum
from typing import Optional

from pydantic import BaseModel, ConfigDict, RootModel


class NUMERICUNIT(Enum):
    basisPoint = 'basisPoint'
    billion = 'billion'
    million = 'million'
    percent = 'percent'
    thousand = 'thousand'


class NumericValueModel(BaseModel):
    model_config = ConfigDict(
        extra='allow',
    )
    unit: Optional[NUMERICUNIT] = None
    value: float


class Model(RootModel[NumericValueModel]):
    root: NumericValueModel
