from __future__ import annotations

from datetime import datetime
from typing import Any

from beanie import PydanticObjectId
from lib_shared.core.utils.base_model.base_model import BaseModel
from lib_shared.core.utils.field.field import Field


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
