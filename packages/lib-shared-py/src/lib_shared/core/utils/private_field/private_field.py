from dataclasses import dataclass
from typing import Any, Callable, Generic, Optional, overload

from lib_shared.core.utils.field.field import _Field
from lib_shared.core.utils.field.field_models import TType

from .private_field_models import PrivateFieldModel


@dataclass
class _PrivateField(_Field, PrivateFieldModel, Generic[TType]):
    is_private: bool = True


@overload
def PrivateField(
    *,
    default_value: Callable[[], TType],
    description: Optional[str] = None,
) -> TType: ...


@overload
def PrivateField(
    *,
    default_value: TType,
    description: Optional[str] = None,
) -> TType: ...


@overload
def PrivateField(
    *,
    description: Optional[str] = None,
) -> Any: ...


def PrivateField(
    *,
    default_value: Any = None,
    description: Optional[str] = None,
) -> Any:
    return _PrivateField(
        default_value=default_value,
        description=description,
    )
