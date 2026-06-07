from __future__ import annotations

from typing import Any

from beanie import Document

from lib_model.core.utils.entity.entity import _Entity


class _DatabaseEntity(
    _Entity,
    Document,
):
    def __init_subclass__(
        cls,
        name: str,
        is_graphql: bool = True,
        **args: Any,
    ) -> None:
        super().__init_subclass__(
            **args,
            is_graphql=is_graphql,
        )
        cls.Settings = type("Settings", (), {"name": name})


DatabaseEntity = _DatabaseEntity
