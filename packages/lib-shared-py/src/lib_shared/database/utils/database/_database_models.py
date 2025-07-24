from typing import Any, Optional, Protocol, Type

from lib_config.database.database_models import DatabaseConfigModel


class _DatabaseModel(Protocol):
    def __init__(
        self,
        params: DatabaseConfigModel,
    ) -> None: ...

    async def initialize(self) -> None: ...

    async def insert(
        self,
        doc: Any,
    ) -> Any: ...

    async def get_by_id(
        self,
        model: Type[Any],
        doc_id: str,
    ) -> Optional[Any]: ...

    async def find(
        self,
        model: Type[Any],
        query: dict = {},
    ) -> list[Any]: ...

    async def update(
        self,
        doc: Any,
        update_fields: dict,
    ) -> Any: ...

    async def delete(
        self,
        doc: Any,
    ) -> None: ...
