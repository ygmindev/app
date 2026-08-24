from typing import Callable, TypeVar

from pydantic import Field as PydanticField
from pydantic import PrivateAttr

from lib_shared.core.utils.field.constants import FieldRelation

TType = TypeVar("TType")

MISSING = object()


def _Field(
    default=MISSING,
    default_factory: Callable[[], TType] | None = None,
    description: str | None = None,
    is_private: bool = False,
    relation: FieldRelation | None = None,
    root: str | None = None,
    alias: str | None = None,
) -> TType:
    default_params = {}
    if default_factory:
        default_params["default_factory"] = default_factory
    if default is not MISSING:
        default_params["default"] = default
    if is_private:
        return PrivateAttr(**default_params)

    extra_metadata = {}
    if relation:
        extra_metadata["relation"] = relation
    if root:
        extra_metadata["root"] = root
        extra_metadata["original_field"] = root

    return PydanticField(
        **default_params,
        alias=alias,
        description=description,
        json_schema_extra=extra_metadata if extra_metadata else None,
    )


Field = _Field
