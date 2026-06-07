from typing import Callable, Optional

from pydantic import Field as PydanticField
from pydantic import PrivateAttr

from .field_models import MISSING, FieldModel, TType


def _Field(
    default=MISSING,
    default_value: Optional[Callable[[], TType]] = None,
    description: Optional[str] = None,
    is_private: bool = False,
) -> TType:
    default_params = {}
    if default_value:
        default_params["default_factory"] = default_value
    if default is not MISSING:
        default_params["default"] = default
    if is_private:
        return PrivateAttr(**default_params)
    return PydanticField(
        **default_params,
        description=description,
    )


Field: FieldModel = _Field
