from dataclasses import dataclass
from typing import Callable, Generic, Optional

from .field_models import FieldModel, TType


@dataclass
class Field(Generic[TType], FieldModel):
    default_value: Optional[TType | Callable[[], TType]] = None
    description: Optional[str] = None
