from __future__ import annotations

from typing import Any, ClassVar, Union, get_args, get_origin

import strawberry
from beanie import PydanticObjectId
from bson import ObjectId
from pydantic import BaseModel
from pydantic.fields import FieldInfo, ModelPrivateAttr
from pydantic_core import PydanticUndefined

_ObjectId = strawberry.scalar(
    ObjectId,
    name="ObjectId",
    serialize=str,
    parse_value=lambda x: ObjectId(str(x)),
)

_OBJECT_IDS: frozenset[type] = frozenset({ObjectId, PydanticObjectId})


def _is_optional(annotation: Any) -> bool:
    return get_origin(annotation) is Union and type(None) in get_args(annotation)


class _Entity(BaseModel):
    def __init_subclass__(
        cls,
        is_graphql: bool = True,
        **args: Any,
    ) -> None:
        super().__init_subclass__(**args)

        if is_graphql:
            ns: dict[str, Any] = {
                "__annotations__": {},
                "__module__": cls.__module__,
                "__qualname__": cls.__qualname__,
            }

            annotations: dict[str, Any] = {}
            for base in reversed(cls.__mro__):
                annotations.update(getattr(base, "__annotations__", {}))

            fields: dict[str, FieldInfo] = getattr(
                cls,
                "__pydantic_fields__",
                {},
            )

            for k, annotation in annotations.items():
                if k.startswith("__"):
                    continue
                if get_origin(annotation) is ClassVar:
                    continue

                field_info: FieldInfo | None = fields.get(k)
                defaults = getattr(cls, k, PydanticUndefined)
                gql_field = strawberry.UNSET

                if field_info is not None:
                    description = field_info.description
                    default_factory = field_info.default_factory
                    default = field_info.default
                    kwargs: dict[str, Any] = {}
                    if description is not None:
                        kwargs["description"] = description
                    if default_factory is not None:
                        kwargs["default_factory"] = default_factory
                    elif default is not PydanticUndefined:
                        kwargs["default"] = default
                    elif _is_optional(annotation):
                        kwargs["default"] = None
                    gql_field = strawberry.field(**kwargs)
                elif isinstance(defaults, ModelPrivateAttr):
                    continue
                elif defaults is not PydanticUndefined:
                    gql_field = strawberry.field(default=defaults)
                elif _is_optional(annotation):
                    gql_field = strawberry.field(default=None)

                ns["__annotations__"][k] = (
                    _ObjectId if annotation in _OBJECT_IDS else annotation
                )
                if gql_field is not strawberry.UNSET:
                    ns[k] = gql_field

            cls.__gql__ = strawberry.type(type(cls.__name__, (object,), ns))


Entity = _Entity
