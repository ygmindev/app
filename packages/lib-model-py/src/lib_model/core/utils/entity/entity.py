from typing import Any, Callable, Union, cast, get_args, get_origin

import strawberry
from beanie import Document
from bson import ObjectId
from pydantic import Field
from strawberry.types.field import StrawberryField

from .entity_models import EntityModel, TType


def _is_optional(annotation: Any) -> bool:
    return get_origin(annotation) is Union and type(None) in get_args(annotation)


_ObjectIDGraphql = strawberry.scalar(
    ObjectId,
    name="MongoID",
    description="MongoDB ObjectId serialised as a string",
    serialize=str,
    parse_value=lambda x: ObjectId(str(x)),
)


def _get_graphql_annotation(annotation: Any) -> Any:
    try:
        from beanie import PydanticObjectId

        _OBJECT_IDS = (ObjectId, PydanticObjectId)
    except ImportError:
        _OBJECT_IDS = (ObjectId,)

    origin = get_origin(annotation)

    if origin is Union:
        mapped_args = tuple(_get_graphql_annotation(a) for a in get_args(annotation))
        return Union[mapped_args]

    if annotation in _OBJECT_IDS:
        return _ObjectIDGraphql

    return annotation


def _Entity(
    name: str,
    is_database: bool = False,
    is_graphql: bool = True,
    # _indices: list[str],
) -> Callable[[type[TType]], type[TType]]:
    def wrapper(cls: type[TType]) -> type[TType]:
        annotations: dict[str, Any] = {}
        defaults: dict[str, Any] = {}

        for base in reversed(cls.__mro__):
            if base is object:
                continue
            annotations.update(getattr(base, "__annotations__", {}))
            for k, v in vars(base).items():
                if not k.startswith("_") and not callable(v):
                    defaults[k] = v

        if is_database:
            database_ns: dict[str, Any] = {"__annotations__": {}}
            for k, v in annotations.items():
                database_ns["__annotations__"][k] = v
                if k in defaults:
                    default = defaults[k]
                    if isinstance(default, StrawberryField) or not callable(default):
                        database_ns[k] = (
                            Field(default=default)
                            if not isinstance(default, type(Field()))
                            else default
                        )
                elif _is_optional(v):
                    database_ns[k] = Field(default=None)

            if name:
                database_ns["Settings"] = type("Settings", (), {"name": name})

            for k, v in vars(cls).items():
                if k.startswith("__"):
                    continue
                if callable(v) or isinstance(v, (classmethod, staticmethod)):
                    database_ns[k] = v

            cls = cast(type[TType], (cls.__name__, (Document,), database_ns))

        if is_graphql:
            graphql_ns: dict[str, Any] = {"__annotations__": {}}

            for k, v in annotations.items():
                graphql_ns["__annotations__"][k] = _get_graphql_annotation(v)

                if k in defaults:
                    default = defaults[k]
                    graphql_ns[k] = strawberry.field(default=default)
                elif _is_optional(v):
                    graphql_ns[k] = strawberry.field(default=None)

            for kv, v in vars(cls).items():
                if kv.startswith("__"):
                    continue
                if callable(v):
                    graphql_ns[kv] = v

            cls = cast(type[TType], type(cls.__name__, (), graphql_ns))
            cls = strawberry.type(cls)

        return cls

    return wrapper


Entity: EntityModel = _Entity
