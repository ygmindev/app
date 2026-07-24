from __future__ import annotations

from datetime import datetime
from typing import TYPE_CHECKING, Any, Optional

from beanie import PydanticObjectId
from lib_shared.core.utils.base_model.base_model import BaseModel
from lib_shared.core.utils.field.constants import FieldRelation
from lib_shared.core.utils.field.field import Field

if TYPE_CHECKING:
    from lib_model.user.user.user import User


class _Entity:
    def __init_subclass__(
        cls,
        is_graphql: bool = True,
        **args: Any,
    ) -> None:
        super().__init_subclass__(**args)


class Entity(
    _Entity,
    BaseModel,
):
    created: datetime = Field(default_value=datetime.now)
    createdBy: Optional[User] = Field(
        relation=FieldRelation.MANY_TO_ONE,
        default=None,
    )
    id: PydanticObjectId = Field(
        default_value=PydanticObjectId,
        alias="_id",
    )

    class Config:
        populate_by_name = True

    @property
    def _id(self) -> str:
        return str(self.id)

    @_id.setter
    def _id(self, value: Any) -> None:
        self.id = (
            PydanticObjectId(value)
            if not isinstance(value, PydanticObjectId)
            else value
        )


# from __future__ import annotations

# from datetime import datetime
# from typing import Any, ClassVar, Optional, Union, get_args, get_origin

# import strawberry
# from beanie import BackLink, Link, PydanticObjectId
# from bson import ObjectId as BsonObjectId
# from lib_shared.core.utils.base_model.base_model import BaseModel
# from lib_shared.core.utils.field.constants import FieldRelation
# from lib_shared.core.utils.field.field import Field
# from lib_shared.core.utils.private_field.private_field import PrivateField
# from pydantic.fields import FieldInfo, ModelPrivateAttr
# from pydantic_core import PydanticUndefined

# from lib_model.core.utils.object_id.object_id import ObjectId
# from lib_model.user.user.user import User

# _ObjectId = strawberry.scalar(
#     BsonObjectId,
#     name="ObjectId",
#     serialize=str,
#     parse_value=lambda x: BsonObjectId(str(x)),
# )

# _OBJECT_IDS: frozenset[type] = frozenset({BsonObjectId, PydanticObjectId})


# def _is_optional(annotation: Any) -> bool:
#     return get_origin(annotation) is Union and type(None) in get_args(annotation)


# def _unwrap(annotation: Any) -> Any:
#     origin = get_origin(annotation)
#     args = get_args(annotation)
#     if origin is Union and len(args) == 2 and type(None) in args:
#         inner = next(a for a in args if not isinstance(a, type(None)))
#         unwrapped = _unwrap(inner)
#         return Optional[unwrapped]
#     if origin is list and args:
#         return list[_unwrap(args[0])]
#     if origin in (Link, BackLink) and args:
#         return args[0]
#     return annotation


# class _Entity(BaseModel):
#     def __init_subclass__(
#         cls,
#         is_graphql: bool = True,
#         **args: Any,
#     ) -> None:
#         super().__init_subclass__(**args)

#         if is_graphql:
#             ns: dict[str, Any] = {
#                 "__annotations__": {},
#                 "__module__": cls.__module__,
#                 "__qualname__": cls.__qualname__,
#             }

#             annotations: dict[str, Any] = {}
#             for base in reversed(cls.__mro__):
#                 annotations.update(getattr(base, "__annotations__", {}))

#             fields: dict[str, FieldInfo] = getattr(
#                 cls,
#                 "__pydantic_fields__",
#                 {},
#             )

#             for k, annotation in annotations.items():
#                 if k.startswith("__"):
#                     continue
#                 if get_origin(annotation) is ClassVar:
#                     continue

#                 annotation = _unwrap(annotation)

#                 field_info: FieldInfo | None = fields.get(k)
#                 defaults = getattr(cls, k, PydanticUndefined)
#                 gql_field = strawberry.UNSET

#                 if field_info is not None:
#                     description = field_info.description
#                     default_factory = field_info.default_factory
#                     default = field_info.default
#                     kwargs: dict[str, Any] = {}
#                     if description is not None:
#                         kwargs["description"] = description
#                     if default_factory is not None:
#                         kwargs["default_factory"] = default_factory
#                     elif default is not PydanticUndefined:
#                         kwargs["default"] = default
#                     elif _is_optional(annotation):
#                         kwargs["default"] = None
#                     gql_field = strawberry.field(**kwargs)
#                 elif isinstance(defaults, ModelPrivateAttr):
#                     continue
#                 elif defaults is not PydanticUndefined:
#                     gql_field = strawberry.field(default=defaults)
#                 elif _is_optional(annotation):
#                     gql_field = strawberry.field(default=None)

#                 ns["__annotations__"][k] = (
#                     _ObjectId if annotation in _OBJECT_IDS else annotation
#                 )
#                 if gql_field is not strawberry.UNSET:
#                     ns[k] = gql_field

#             cls.__gql__ = strawberry.type(type(cls.__name__, (object,), ns))


# class Entity(_Entity):
#     created: datetime = Field(default_value=datetime.now)
#     createdBy: Optional[User] = Field(
#         relation=FieldRelation.MANY_TO_ONE,
#         default=None,
#     )
#     _id: str = PrivateField(default_value=ObjectId)
