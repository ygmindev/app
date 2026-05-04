from dataclasses import dataclass
from typing import Any, Callable, Generic, Optional, overload

from .field_models import FieldModel, TType


@dataclass
class _Field(Generic[TType], FieldModel):
    default_value: Optional[TType | Callable[[], TType]] = None
    description: Optional[str] = None


@overload
def Field(
    *,
    default_value: Callable[[], TType],
    description: Optional[str] = None,
) -> TType: ...


@overload
def Field(
    *,
    default_value: TType,
    description: Optional[str] = None,
) -> TType: ...


@overload
def Field(
    *,
    description: Optional[str] = None,
) -> Any: ...


def Field(
    *,
    default_value: Any = None,
    description: Optional[str] = None,
) -> Any:
    return _Field(
        default_value=default_value,
        description=description,
    )
