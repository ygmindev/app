from __future__ import annotations

import sys
from typing import Any, ClassVar, Optional, dataclass_transform, get_args, get_origin

from beanie import BackLink, Document, Link
from lib_shared.core.utils.field.constants import FieldRelation
from pydantic import PydanticUndefinedAnnotation
from pydantic.fields import FieldInfo
from pydantic_core import PydanticUndefined

from lib_model.core.utils.entity.entity import Entity

DocumentMeta = type(Document)

_registry: list[type] = []


class _DatabaseEntityMeta(DocumentMeta):
    def __new__(
        mcs: type["_DatabaseEntityMeta"],
        cls_name: str,
        bases: tuple[type[Any], ...],
        namespace: dict[str, Any],
        **kwargs: Any,
    ) -> type[Any]:
        annotations = namespace.get("__annotations__", {})

        for k, v in list(annotations.items()):
            value = namespace.get(k)
            if not isinstance(value, FieldInfo):
                continue

            schema = value.json_schema_extra
            if not isinstance(schema, dict):
                continue

            relation = schema.get("relation")
            root = schema.get("root")

            if relation:
                origin = get_origin(v)
                args = get_args(v)
                match relation:
                    case FieldRelation.ONE_TO_MANY | FieldRelation.MANY_TO_MANY:
                        if origin is list and args:
                            target = args[0]
                            if root:
                                annotations[k] = Optional[list[BackLink[target]]]
                                if (
                                    isinstance(value, FieldInfo)
                                    and value.default is PydanticUndefined
                                    and value.default_factory is None
                                ):
                                    value.default = None
                            else:
                                annotations[k] = list[Link[target]]
                    case FieldRelation.MANY_TO_ONE | FieldRelation.ONE_TO_ONE:
                        if root:
                            annotations[k] = BackLink[v]
                        else:
                            annotations[k] = Link[v]

        name = kwargs.pop("name", None)
        if name:
            namespace["Settings"] = type("Settings", (), {"name": name})
            annotations["Settings"] = ClassVar[type]

        namespace["__annotations__"] = annotations
        cls = super().__new__(mcs, cls_name, bases, namespace, **kwargs)  # type: ignore

        _registry.append(cls)
        types_namespace = {registered.__name__: registered for registered in _registry}
        for registered in _registry:
            module = sys.modules.get(registered.__module__, None)
            module_ns = vars(module) if module else {}
            try:
                registered.model_rebuild(
                    _types_namespace={**module_ns, **types_namespace},
                    force=True,
                )
            except PydanticUndefinedAnnotation:
                pass

        return cls


@dataclass_transform(kw_only_default=True)
class _DatabaseEntity(
    Entity,
    Document,
    metaclass=_DatabaseEntityMeta,
):
    def __init_subclass__(
        cls,
        is_graphql: bool = True,
        **args: Any,
    ) -> None:
        super().__init_subclass__(
            **args,
            is_graphql=is_graphql,
        )


DatabaseEntity = _DatabaseEntity
