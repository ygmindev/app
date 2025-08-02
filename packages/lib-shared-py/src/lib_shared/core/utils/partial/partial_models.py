from typing import Type, TypeVar

from pydantic import BaseModel

TType = TypeVar("TType", bound=BaseModel)

PartialParamsModel = Type[TType]
PartialModel = Type[TType]
