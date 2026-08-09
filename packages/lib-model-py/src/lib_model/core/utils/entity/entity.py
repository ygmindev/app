from __future__ import annotations

from datetime import datetime
from typing import Any, cast, get_args, get_origin

from beanie import PydanticObjectId
from lib_shared.core.utils.base_model.constants import ExportMode
from lib_shared.core.utils.field.field import Field
from pydantic import model_validator
from pydantic.fields import FieldInfo

from lib_model.core.utils.entity.entity_models import EntityModel, _EntityModel


class _Entity(_EntityModel):
    def __init_subclass__(
        cls,
        is_graphql: bool = True,
        **args: Any,
    ) -> None:
        super().__init_subclass__(**args)


class Entity(
    _Entity,
    EntityModel,
):
    created: datetime = Field(default_value=datetime.now)
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

    @classmethod
    def _field_target(
        cls,
        name: str,
    ) -> tuple[type | None, bool]:
        for c in cls.__mro__:
            fields = getattr(c, "model_fields", None)
            if not fields:
                continue
            fields = cast(dict[str, FieldInfo], fields)
            info = fields.get(name, None)
            if not info:
                continue
            annotation = info.annotation
            args = [a for a in get_args(annotation) if a is not type(None)]
            arg = args[0] if args else annotation
            origin = get_origin(arg)
            if origin is list:
                inner = [a for a in get_args(arg) if a is not type(None)]
                inner_cls = inner[0] if inner else None
                if isinstance(inner_cls, type) and issubclass(inner_cls, Entity):
                    return inner_cls, True
                continue
            if isinstance(arg, type) and issubclass(arg, Entity):
                return arg, False
        return None, False

    @classmethod
    def _relations(cls) -> list[tuple[str, type["Entity"], bool]]:
        result: list[tuple[str, type["Entity"], bool]] = []
        for name, field in cls.model_fields.items():
            extra = field.json_schema_extra or {}
            if not isinstance(extra, dict) or "relation" not in extra:
                continue
            target_cls, is_list = cls._field_target(name)
            if target_cls is None:
                continue
            result.append((name, target_cls, is_list))
        return result

    @staticmethod
    def _ensure_entity(
        value: Any,
        target_cls: type["Entity"],
    ) -> "Entity":
        if isinstance(value, target_cls):
            return value
        return target_cls.from_dict({"id": value})

    @staticmethod
    def _relation_id(value: Any) -> Any:
        return value.id if isinstance(value, Entity) else value

    @model_validator(mode="before")
    @classmethod
    def _resolve_relations(
        cls,
        data: Any,
    ) -> Any:
        if not isinstance(data, dict):
            return data
        for name, target_cls, is_list in cls._relations():
            value = data.get(name)
            if value is None:
                continue
            if is_list and isinstance(value, list):
                data[name] = [cls._ensure_entity(v, target_cls) for v in value]
            elif not is_list:
                data[name] = cls._ensure_entity(value, target_cls)
        return data

    def to_dict(
        self,
        mode: ExportMode = ExportMode.JSON,
        exclude: set[str] | None = None,
    ) -> dict[str, Any]:
        relations = self._relations()
        data = super().to_dict(
            mode=mode,
            exclude=(exclude or set()) | set(name for name, _, _ in relations),
        )
        for name, target_cls, is_list in relations:
            value = getattr(self, name, None)
            if value is None:
                data[name] = None
                continue

            if mode == ExportMode.PYTHON:
                if is_list:
                    data[name] = [
                        self._ensure_entity(self._relation_id(v), target_cls)
                        for v in value
                    ]
                else:
                    data[name] = self._ensure_entity(
                        self._relation_id(value), target_cls
                    )
            else:
                if is_list:
                    data[name] = [str(self._relation_id(v)) for v in value]
                else:
                    data[name] = str(self._relation_id(value))

        return data
