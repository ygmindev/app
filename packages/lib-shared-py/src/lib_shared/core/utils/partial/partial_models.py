from typing import TypeVar

from pydantic import BaseModel

TType = TypeVar("TType", bound=BaseModel)

PartialParamsModel = type[TType]
PartialModel = type[TType]
