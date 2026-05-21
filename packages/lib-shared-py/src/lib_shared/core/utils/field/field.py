from typing import Callable, Optional

from pydantic import Field as PydanticField
from pydantic import PrivateAttr

from .field_models import FieldModel, TType


def _Field(
    default_value: Callable[[], TType],
    description: Optional[str] = None,
    is_private: bool = False,
) -> TType:
    if is_private:
        return PrivateAttr(default_factory=default_value)
    return PydanticField(
        default_factory=default_value,
        description=description,
    )


Field: FieldModel = _Field
