from typing import Any, Callable, Union, cast, dataclass_transform, get_args, get_origin

import strawberry
from beanie import Document
from bson import ObjectId
from lib_shared.core.utils.dataclass import Dataclass
from lib_shared.core.utils.field.field import _Field
from lib_shared.core.utils.inspect_class import inspect_class
from pydantic import Field as PydanticField

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
    # _indices: list[str],
) -> Callable[[type[TType]], type[TType]]:
    def wrapper(cls: type[TType]) -> type[TType]:
        inspection = inspect_class(cls, is_deep=False)
        annotations = inspection["annotations"]
        defaults = inspection["defaults"]

        if is_database:
            database_ns: dict[str, Any] = {"__annotations__": {}}
            for k, v in annotations.items():
                database_ns["__annotations__"][k] = v
                default = defaults.get(k)

                if isinstance(default, _Field):
                    default_value = default.default_value
                    args: dict[str, Any] = {"description": default.description}
                    if default_value is not None:
                        if callable(default_value):
                            args["default_factory"] = default_value
                        else:
                            args["default"] = default_value
                    database_ns[k] = PydanticField(**args)
                elif default is not None:
                    database_ns[k] = PydanticField(default=default)
                elif _is_optional(v):
                    database_ns[k] = PydanticField(default=None)

            database_ns["Settings"] = type("Settings", (), {"name": name})

            for k, v in vars(cls).items():
                if not k.startswith("__") and (
                    callable(v) or isinstance(v, (classmethod, staticmethod))
                ):
                    database_ns[k] = v

            bases = list(inspection["bases"])
            if Document not in bases:
                bases.insert(0, Document)
            cls = cast(type[TType], type(cls.__name__, tuple(bases), database_ns))

        if is_graphql:
            graphql_ns: dict[str, Any] = {"__annotations__": {}}

            for k, v in annotations.items():
                graphql_ns["__annotations__"][k] = _get_graphql_annotation(v)
                default = defaults.get(k)

                if isinstance(default, _Field):
                    default_value = default.default_value
                    args: dict[str, Any] = {"description": default.description}
                    if default_value is not None:
                        if callable(default_value):
                            args["default_factory"] = default_value
                        else:
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
        new_cls = Dataclass()(cls)
        is_entity = any(
            isinstance(base, type) and issubclass(base, EntityModelType)
            for base in cls.__mro__[1:]
        )
        if not is_entity:
            new_cls = type(cls.__name__, (new_cls, EntityModelType), {})
        return _wrapper(new_cls)

    return wrapper
