from typing import Generic, Optional, Type

from beanie import init_beanie
from lib_config.database.database_models import DatabaseConfigModel
from motor.motor_asyncio import AsyncIOMotorClient

from lib_shared.database.utils.database._database_models import (
    CreateManyResultModel,
    CreateResultModel,
    DeleteResultModel,
    FindResultModel,
    TType,
    UpdateResultModel,
    UpsertResultModel,
    _DatabaseModel,
)
from lib_shared.database.utils.database.constants import UPSERT_STRATEGY


class _Database(_DatabaseModel, Generic[TType]):
    def __init__(
        self,
        params: DatabaseConfigModel,
    ) -> None:
        self._params = params
        self._client = None
        self._is_initialized = False

    async def initialize(self) -> None:
        if self._is_initialized:
            return
        self._client = AsyncIOMotorClient(self._params.host)
        await init_beanie(
            database=self._client[self._params.database],
            document_models=self._params.resources,
        )
        self._is_initialized = True

    async def create(
        self,
        data: TType,
    ) -> CreateResultModel[TType]:
        await data.insert()
        return CreateResultModel(
            result=data,
            success=True,
        )

    async def create_many(
        self,
        data: list[TType],
        resource: Type[TType],
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

    async def find(
        self,
        query: dict,
        resource: Type[TType],
        limit: Optional[int] = None,
        skip: Optional[int] = None,
    ) -> FindResultModel[TType]:
        result = resource.find(query)
        if skip:
            op = result.skip(skip)
        if limit:
            op = op.limit(limit)
        result = await op.to_list()
        return FindResultModel(result=result)

    async def update(
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

    async def delete(
        self,
        data: TType,
    ) -> DeleteResultModel:
        await data.delete()
        return DeleteResultModel(
            result=data._id,
            success=True,
        )

    async def upsert(
        self,
        data: TType,
        update: dict,
        resource: Type[TType],
        index_field: str = "_id",
        strategy: UPSERT_STRATEGY = UPSERT_STRATEGY.REPLACE,
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
        if strategy == UPSERT_STRATEGY.IGNORE:
            return UpsertResultModel(
                result=existing,
                success=True,
            )
        if strategy == UPSERT_STRATEGY.REPLACE:
            data.id = existing.id
            await data.replace()
            return UpsertResultModel(
                result=data,
                success=True,
            )
        if strategy == UPSERT_STRATEGY.UPDATE:
            result = await self.update(
                data=data,
                update=update,
            )
            return UpsertResultModel(
                result=result.result,
                success=result.success,
            )
        raise ValueError(f"Unknown upsert strategy: {strategy}")
