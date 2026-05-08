from typing import Any, Callable, Optional

from pydantic import Field as PydanticField
from pydantic import PrivateAttr

from .field_models import TType


def _Field(
    default_value: Callable[[], TType],
    description: Optional[str] = None,
    is_private: bool = False,
):
    if is_private:
        return PrivateAttr(default_factory=default_value)
    return PydanticField(
        default_factory=default_value,
        description=description,
    )


def Field(
    default_value: Callable[[], TType],
    description: Optional[str] = None,
    is_private: bool = False,
) -> Any:
    return _Field(
        default_value=default_value,
        description=description,
        is_private=is_private,
    )
