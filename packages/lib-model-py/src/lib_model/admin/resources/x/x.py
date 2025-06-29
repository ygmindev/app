from __future__ import annotations

from typing import List

from pydantic import BaseModel, ConfigDict, RootModel

from ..y import y


class XModel(BaseModel):
    model_config = ConfigDict(
        extra='forbid',
    )
    x1: float
    x2: y.YModel
    y2: List[y.YModel]


class Model(RootModel[XModel]):
    root: XModel
