# template version: 1.0.0

from typing import Generic, Literal, Optional, Protocol, Sequence, TypeVar

from lib_config.database.database_models import DatabaseConfigModel
from lib_model.core.utils.database_entity.database_entity import DatabaseEntity
from pydantic import BaseModel

from lib_shared.database.utils.database.constants import UPSERT_STRATEGY

TType = TypeVar("TType", bound=DatabaseEntity)


class CreateResultModel(BaseModel, Generic[TType]):
    result: TType
    success: bool


class CreateManyResultModel(BaseModel, Generic[TType]):
    result: list[TType]
    count: int
    success: bool


class FindResultModel(BaseModel, Generic[TType]):
    result: list[TType]


class UpdateResultModel(BaseModel, Generic[TType]):
    result: TType
    success: bool


class DeleteResultModel(BaseModel):
    result: str
    success: bool


class UpsertResultModel(BaseModel, Generic[TType]):
    result: TType
    success: bool


class _DatabaseModel(Protocol):
    def __init__(
        self,
        config: DatabaseConfigModel,
    ) -> None: ...

    async def initialize(self) -> None: ...

    async def close(self) -> None: ...

    async def create[TType: DatabaseEntity](
        self,
        data: TType,
    ) -> CreateResultModel[TType]: ...

    async def create_many[TType: DatabaseEntity](
        self,
        data: list[TType],
        resource: type[TType],
    ) -> CreateManyResultModel[TType]: ...

    async def find[TType: DatabaseEntity](
        self,
        query: dict,
        resource: type[TType],
        limit: Optional[int] = None,
        skip: Optional[int] = None,
        sort: Optional[Sequence[tuple[str, Literal[-1, 1]]]] = None,
    ) -> FindResultModel[TType]: ...

    async def update[TType: DatabaseEntity](
        self,
        data: TType,
        update: dict,
    ) -> UpdateResultModel[TType]: ...

    async def delete[TType: DatabaseEntity](
        self,
        data: TType,
    ) -> DeleteResultModel: ...

    async def upsert[TType: DatabaseEntity](
        self,
        data: TType,
        update: dict,
        resource: type[TType],
        index_field: str = "_id",
        strategy: UPSERT_STRATEGY = UPSERT_STRATEGY.REPLACE,
    ) -> UpsertResultModel[TType]: ...


class DatabaseModel(_DatabaseModel): ...
