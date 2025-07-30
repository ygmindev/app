from typing import Protocol, Type, TypeVar

from beanie import Document
from lib_config.database.database_models import DatabaseConfigModel

TType = TypeVar("TType", bound=Document)


class _DatabaseModel(Protocol):
    def __init__(
        self,
        params: DatabaseConfigModel,
    ) -> None: ...

    async def initialize(self) -> None: ...

    async def create(
        self,
        doc: TType,
    ) -> TType: ...

    async def create_many(
        self,
        doc: list[TType],
        model: Type[TType],
    ) -> list[TType]: ...

    async def find(
        self,
        query: dict,
        model: Type[TType],
    ) -> list[TType]: ...

    async def update(
        self,
        doc: TType,
        update_fields: dict,
    ) -> TType: ...

    async def delete(
        self,
        doc: TType,
    ) -> None: ...
