from __future__ import annotations

import functools
from typing import Any, Callable, Union, dataclass_transform, get_args, get_origin

import strawberry
from beanie import Document, PydanticObjectId
from bson import ObjectId
from pydantic.fields import FieldInfo, ModelPrivateAttr
from pydantic_core import PydanticUndefined

from .entity_models import EntityModelType, TType

_ObjectId = strawberry.scalar(
    ObjectId,
    name="ObjectId",
    serialize=str,
    parse_value=lambda x: ObjectId(str(x)),
)

_OBJECT_IDS: frozenset[type] = frozenset({ObjectId, PydanticObjectId})


def _is_optional(annotation: Any) -> bool:
    return get_origin(annotation) is Union and type(None) in get_args(annotation)


@functools.lru_cache(maxsize=None)
def _inspect_class(
    cls: type,
) -> tuple[dict[str, Any], dict[str, Any], dict[str, Any]]:
    annotations: dict[str, Any] = {}
    defaults: dict[str, Any] = {}
    methods: dict[str, Any] = {}

    for base in reversed(cls.__mro__):
        if base is object:
            continue

        base_annotations = getattr(base, "__annotations__", {})
        annotations.update(base_annotations)

        for k, v in vars(base).items():
            if k.startswith("__") and k.endswith("__"):
                continue
            if k in base_annotations:
                if isinstance(v, (FieldInfo, ModelPrivateAttr)):
                    defaults[k] = v
                elif not isinstance(
                    v, (classmethod, staticmethod, property)
                ) and not callable(v):
                    defaults[k] = v
            elif isinstance(v, (classmethod, staticmethod, property)) or (
                callable(v) and not isinstance(v, type)
            ):
                methods[k] = v

    return annotations, defaults, methods


def _bases(cls: type) -> list[type]:
    candidates = [b for b in cls.__bases__ if b is not object]
    if not candidates:
        return [object]
    return [
        base
        for base in candidates
        if not any(
            other is not base and issubclass(other, base) for other in candidates
        )
    ] or [object]


@dataclass_transform()
def Entity(
    is_database: bool = False,
    is_graphql: bool = True,
) -> Callable[[type[TType]], type[TType]]:
    def wrapper(cls: type[TType]) -> type[TType]:
        if not any(
            base is not EntityModelType and issubclass(base, EntityModelType)
            for base in cls.__mro__[1:]
            if isinstance(base, type)
        ):
            cls = type(cls.__name__, (cls, EntityModelType), {})

        annotations, defaults, methods = _inspect_class(cls)
        bases = _bases(cls)

        if is_database:
            db_ns: dict[str, Any] = {
                "__annotations__": {},
                "Settings": type("Settings", (), {"name": cls.__name__}),
                **methods,
            }
            if Document not in bases:
                bases.insert(0, Document)
            cls = type(cls.__name__, tuple(bases), db_ns)

        if is_graphql:
            gql_ns: dict[str, Any] = {"__annotations__": {}, **methods}

            for k, annotation in annotations.items():
                default_value = defaults.get(k)

                if isinstance(default_value, (FieldInfo, ModelPrivateAttr)):
                    description = getattr(default_value, "description", None)
                    default_factory = getattr(default_value, "default_factory", None)
                    raw_default = getattr(default_value, "default", PydanticUndefined)

                    kwargs: dict[str, Any] = {"description": description}
                    if default_factory is not None:
                        kwargs["default_factory"] = default_factory
                    elif raw_default is not PydanticUndefined:
                        kwargs["default"] = raw_default
                    elif _is_optional(annotation):
                        kwargs["default"] = None
                    gql_ns[k] = strawberry.field(**kwargs)
                if default_value is not None:
                    gql_ns[k] = strawberry.field(default=default_value)
                if _is_optional(annotation):
                    gql_ns[k] = strawberry.field(default=None)

                gql_ns["__annotations__"][k] = (
                    _ObjectId if annotation in _OBJECT_IDS else annotation
                )
            cls.__gql__ = strawberry.type(type(cls.__name__, (object,), gql_ns))

        return cls

    return wrapper
