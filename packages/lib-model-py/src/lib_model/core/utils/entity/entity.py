from typing import Any, Callable, Union, cast, dataclass_transform, get_args, get_origin

import strawberry
from beanie import Document
from bson import ObjectId
from pydantic.fields import FieldInfo, ModelPrivateAttr
from pydantic_core import PydanticUndefined

from .entity_models import EntityModelType, TType


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
) -> Callable[[type[TType]], type[TType]]:
    def wrapper(cls: type[TType]) -> type[TType]:

        annotations: dict[str, Any] = {}
        defaults: dict[str, Any] = {}
        methods: dict[str, Any] = {}

        bases = reversed(cls.__mro__)
        for base in bases:
            if base is object:
                continue
            base_annotations = getattr(base, "__annotations__", {})
            annotations.update(base_annotations)
            for k, v in vars(base).items():
                if callable(v) or isinstance(v, (classmethod, staticmethod, property)):
                    if not (k.startswith("__") and k.endswith("__")):
                        methods[k] = v
                    continue

                if k.startswith("_") or (
                    k not in annotations and k not in base_annotations
                ):
                    continue

                defaults[k] = v

        bases = set()
        for base in cls.__bases__:
            if base is object:
                continue
            if base not in bases and not any(
                base != other and isinstance(other, type) and issubclass(other, base)
                for other in bases
            ):
                bases.add(base)
        bases = list(bases) or [object]

        if is_database:
            database_ns: dict[str, Any] = {
                "__annotations__": {},
                "Settings": type("Settings", (), {"name": name}),
            }

            for k, v in vars(cls).items():
                if not k.startswith("__") and (
                    callable(v) or isinstance(v, (classmethod, staticmethod))
                ):
                    database_ns[k] = v

            if Document not in bases:
                bases.insert(0, Document)
            cls = cast(type[TType], type(cls.__name__, tuple(bases), database_ns))

        if is_graphql:
            graphql_ns: dict[str, Any] = {"__annotations__": {}}

            for k, v in annotations.items():
                graphql_ns["__annotations__"][k] = _get_graphql_annotation(v)
                default = defaults.get(k)

                if isinstance(default, (FieldInfo, ModelPrivateAttr)):
                    description = getattr(default, "description", None)
                    default_factory = getattr(default, "default_factory", None)
                    default_value = getattr(default, "default", PydanticUndefined)
                    args: dict[str, Any] = {"description": description}
                    if default_factory is not None:
                        args["default_factory"] = default_factory
                    elif default_value is not PydanticUndefined:
                        args["default"] = default_value
                    graphql_ns[k] = strawberry.field(**args)
                elif default is not None:
                    graphql_ns[k] = strawberry.field(default=default)
                elif _is_optional(v):
                    graphql_ns[k] = strawberry.field(default=None)

            for k, v in vars(cls).items():
                if not k.startswith("__") and (
                    callable(v) or isinstance(v, (classmethod, staticmethod))
                ):
                    graphql_ns[k] = v

            cls.__gql__ = strawberry.type(
                type(f"{cls.__name__}GQL", (object,), graphql_ns)
            )

        return cls

    return wrapper


@dataclass_transform()
def Entity(
    name: str,
    is_database: bool = False,
    is_graphql: bool = True,
) -> Callable[[type[TType]], type[TType]]:
    _wrapper = _Entity(
        name,
        is_database,
        is_graphql,
    )

    def wrapper(cls: type[TType]) -> type[TType]:
        new_cls = cls
        is_entity = any(
            isinstance(base, type) and issubclass(base, EntityModelType)
            for base in cls.__mro__[1:]
        )
        if not is_entity:
            new_cls = type(cls.__name__, (new_cls, EntityModelType), {})
        return _wrapper(new_cls)

    return wrapper
