# template version: 1.0.0

from typing import Any, Literal, Sequence

from beanie import SortDirection, init_beanie
from lib_config.database.database_models import DatabaseConfigModel
from lib_model.core.utils.database_entity.database_entity import DatabaseEntity
from pymongo import AsyncMongoClient

from lib_shared.core.utils.base_model.base_model import BaseModel
from lib_shared.core.utils.private_field.private_field import PrivateField
from lib_shared.database.utils.database.constants import UpsertStrategy


class CreateResultModel[TType: DatabaseEntity](BaseModel):
    result: TType
    success: bool


class CreateManyResultModel[TType: DatabaseEntity](BaseModel):
    result: list[TType]
    count: int
    success: bool


class FindResultModel[TType: DatabaseEntity](BaseModel):
    result: list[TType]


class UpdateResultModel[TType: DatabaseEntity](BaseModel):
    result: TType
    success: bool


class DeleteResultModel(BaseModel):
    result: str
    success: bool


class UpsertResultModel[TType: DatabaseEntity](BaseModel):
    result: TType
    success: bool


class _Database(BaseModel):
    config: DatabaseConfigModel

    _client: AsyncMongoClient = PrivateField()

    def model_post_init(self, __context: Any) -> None:
        self._client = AsyncMongoClient(
            host=self.config.host,
            username=self.config.username,
            password=self.config.password,
            minPoolSize=self.config.min_pool,
            maxPoolSize=self.config.max_pool,
            connectTimeoutMS=self.config.timeout,
        )

    async def initialize(self) -> None:
        DatabaseEntity.initialize()
        await init_beanie(
            database=self._client[self.config.database],
            document_models=self.config.resources,
        )

    async def close(self) -> None:
        await self._client.close()

    async def create[TType: DatabaseEntity](
        self,
        data: TType,
    ) -> CreateResultModel[TType]:
        await data.insert()
        return CreateResultModel(
            result=data,
            success=True,
        )

    async def create_many[TType: DatabaseEntity](
        self,
        data: list[TType],
        resource: type[TType],
    ) -> CreateManyResultModel[TType]:
        count = 0
        success = True
        try:
            await resource.insert_many(data)
            count = len(data)
        except Exception:
            success = False
            result = []
            for doc in data:
                await doc.insert()
                result.append(doc)
                count += 1
            data = result

        return CreateManyResultModel(
            result=data,
            count=count,
            success=success,
        )

    async def find[TType: DatabaseEntity](
        self,
        query: dict,
        resource: type[TType],
        limit: int | None = None,
        skip: int | None = None,
        sort: Sequence[tuple[str, Literal[-1, 1]]] | None = None,
    ) -> FindResultModel[TType]:
        result = resource.find(query, fetch_links=True)
        if skip:
            result = result.skip(skip)
        if limit:
            result = result.limit(limit)
        if sort:
            result = result.sort(
                *(
                    (
                        s[0],
                        SortDirection.ASCENDING if s[1] else SortDirection.DESCENDING,
                    )
                    for s in sort
                )
            )
        result = await result.to_list()
        return FindResultModel(result=result)

    async def update[TType: DatabaseEntity](
        self,
        data: TType,
        update: dict,
    ) -> UpdateResultModel[TType]:
        for key, value in update.items():
            setattr(data, key, value)
        await data.save()
        return UpdateResultModel(
            result=data,
            success=True,
        )

    async def delete[TType: DatabaseEntity](
        self,
        data: TType,
    ) -> DeleteResultModel:
        await data.delete()
        return DeleteResultModel(
            result=data._id,
            success=True,
        )

    async def upsert[TType: DatabaseEntity](
        self,
        data: TType,
        update: dict,
        resource: type[TType],
        index_field: str = "_id",
        strategy: UpsertStrategy = UpsertStrategy.REPLACE,
    ) -> UpsertResultModel[TType]:
        index_value = getattr(data, index_field, None)
        if index_value is None:
            result = await self.create(data)
            return UpsertResultModel(
                result=result.result,
                success=result.success,
            )
        query = {index_field: index_value}
        existing = await resource.find_one(query)
        if existing is None:
            result = await self.create(data)
            return UpsertResultModel(
                result=result.result,
                success=result.success,
            )
        if strategy == UpsertStrategy.IGNORE:
            return UpsertResultModel(
                result=existing,
                success=True,
            )
        if strategy == UpsertStrategy.REPLACE:
            data.id = existing.id
            await data.replace()
            return UpsertResultModel(
                result=data,
                success=True,
            )
        if strategy == UpsertStrategy.UPDATE:
            result = await self.update(
                data=data,
                update=update,
            )
            return UpsertResultModel(
                result=result.result,
                success=result.success,
            )
        raise ValueError(f"Unknown upsert strategy: {strategy}")


class Database(_Database): ...
