from __future__ import annotations

import sys
from contextlib import contextmanager
from copy import copy
from typing import (
    Annotated,
    Any,
    Generator,
    Optional,
    Self,
    Union,
    get_args,
    get_origin,
    get_type_hints,
)

from beanie import BackLink, Document, Link, PydanticObjectId
from lib_shared.core.utils.base_model.base_model import BaseModel
from lib_shared.core.utils.field.constants import FieldRelation
from pydantic import BeforeValidator

from lib_model.core.utils.entity.entity import Entity


def _extract_id(x: Any) -> Any:
    if isinstance(x, dict):
        return x.get("_id", x.get("id", x))
    return getattr(x, "id", getattr(x, "_id", x))


class _DatabaseEntity(Document):
    def __init_subclass__(
        cls,
        *,
        name: str | None = None,
        **kwargs: Any,
    ) -> None:
        super().__init_subclass__(**kwargs)
        if name is not None:
            cls.Settings = type(
                "Settings",
                (),
                {
                    "name": name,
                    "keep_nulls": False,
                },
            )

    @contextmanager
    def _clean(self) -> Generator[Self, Any, None]:
        fields = []
        for field_name, field_info in type(self).model_fields.items():
            schema = field_info.json_schema_extra
            if isinstance(schema, dict) and schema.get("relation"):
                continue
            value = getattr(self, field_name, None)
            if isinstance(value, (list, dict, set, tuple)) and len(value) == 0:
                fields.append(field_name)

        originals = {name: getattr(self, name) for name in fields}
        for name in originals:
            setattr(self, name, None)
        try:
            yield self
        finally:
            for name, value in originals.items():
                setattr(self, name, value)

    async def insert(self, *args: Any, **kwargs: Any):
        with self._clean():
            return await super().insert(*args, **kwargs)

    async def save(self, *args: Any, **kwargs: Any):
        with self._clean():
            return await super().save(*args, **kwargs)

    async def replace(self, *args: Any, **kwargs: Any):
        with self._clean():
            return await super().replace(*args, **kwargs)

    @classmethod
    def initialize(cls) -> None:
        models = [
            m
            for m in BaseModel._registry.values()
            if issubclass(m, _DatabaseEntity) and m is not _DatabaseEntity
        ]
        models = list(dict.fromkeys(models))
        ns = {
            "Document": Document,
            "PydanticObjectId": PydanticObjectId,
            "Union": Union,
            "Any": Any,
            "Annotated": Annotated,
            "BeforeValidator": BeforeValidator,
            "_extract_id": _extract_id,
        }
        model_ns = {m.__name__: m for m in models}
        full_ns = {**ns, **model_ns}
        for model in models:
            module = sys.modules.get(model.__module__, None)
            localns = {**(vars(module) if module else {}), **ns, **model_ns}
            hints = get_type_hints(model, localns=localns)

            if "__annotations__" not in model.__dict__:
                model.__annotations__ = dict(getattr(model, "__annotations__", {}))

            for field_name, field_info in model.model_fields.items():
                if field_name not in hints:
                    continue

                schema = field_info.json_schema_extra or {}
                relation = schema.get("relation")

                if not isinstance(schema, dict) or not relation:
                    continue

                root = schema.get("root")
                annotation = hints[field_name]
                origin = get_origin(annotation)
                args = get_args(annotation)

                if origin in (Link, BackLink):
                    continue
                if (
                    origin is list
                    and args
                    and (get_origin(args[0]) in (Link, BackLink))
                ):
                    continue

                is_optional = False
                if origin is Union and len(args) == 2 and type(None) in args:
                    annotation = next(a for a in args if not isinstance(a, type(None)))
                    if get_origin(annotation) in (Link, BackLink):
                        continue

                    is_optional = True

                annotation_new = annotation
                match relation:
                    case FieldRelation.MANY_TO_ONE | FieldRelation.ONE_TO_ONE:
                        if root:
                            field_info.exclude = True
                        else:
                            annotation_new = Annotated[
                                PydanticObjectId,
                                BeforeValidator(_extract_id),
                            ]
                    case FieldRelation.MANY_TO_MANY | FieldRelation.ONE_TO_MANY:
                        if origin is list and args:
                            target = args[0]
                            if root:
                                annotation_new = list[target]
                                field_info.exclude = True
                            else:
                                annotation_new = list[
                                    Annotated[
                                        PydanticObjectId,
                                        BeforeValidator(_extract_id),
                                    ]
                                ]

                annotation_new = (
                    Optional[annotation_new] if is_optional else annotation_new
                )
                field_info = copy(field_info)
                field_info.annotation = annotation_new
                if root:
                    field_info.exclude = True
                model.model_fields[field_name] = field_info
                model.__annotations__[field_name] = annotation_new

        for model in models:
            module = sys.modules.get(model.__module__, None)
            rebuild_ns = {
                **(vars(module) if module else {}),
                **full_ns,
            }
            model.model_rebuild(force=True, _types_namespace=rebuild_ns)


class DatabaseEntity(
    Entity,
    _DatabaseEntity,
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
