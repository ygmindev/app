from typing import Generic, Optional, Protocol, Type, TypeVar

from beanie import Document
from lib_config.database.database_models import DatabaseConfigModel
from pydantic import BaseModel

TType = TypeVar("TType", bound=Document)


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


class UpsertManyResultModel(BaseModel, Generic[TType]):
    result: list[TType]
    count: int
    success: bool


class _DatabaseModel(Protocol, Generic[TType]):
    def __init__(
        self,
        params: DatabaseConfigModel,
    ) -> None: ...

    async def initialize(self) -> None: ...

    async def create(
        self,
        data: TType,
    ) -> CreateResultModel[TType]: ...

    async def create_many(
        self,
        data: list[TType],
        resource: Type[TType],
    ) -> CreateManyResultModel[TType]: ...

    async def find(
        self,
        query: dict,
        resource: Type[TType],
        limit: Optional[int] = None,
        skip: Optional[int] = None,
    ) -> FindResultModel[TType]: ...

    async def update(
        self,
        data: TType,
        update: dict,
    ) -> UpdateResultModel[TType]: ...

    async def delete(
        self,
        data: TType,
    ) -> DeleteResultModel: ...
