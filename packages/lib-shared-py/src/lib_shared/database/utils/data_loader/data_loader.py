from typing import Generic, TypeVar

from lib_model.core.utils.database_entity.database_entity import DatabaseEntity

from lib_shared.core.utils.base_model.base_model import BaseModel
from lib_shared.core.utils.field.field import Field
from lib_shared.core.utils.logger.logger import logger
from lib_shared.database.utils.database import Database

TType = TypeVar("TType", bound=DatabaseEntity)


class DataLoader(BaseModel, Generic[TType]):
    resource: DatabaseEntity
    source: str | None = None
    database: Database = Field(default_factory=lambda: db)

    async def load(
        self,
    ) -> list[TType]:
        raise NotImplementedError("load() method not implemented")

    async def upload(
        self,
    ) -> list[TType]:
        data = await self.load()
        if len(data):
            if self.database:
                if self._params.source:
                    for v in data:
                        v.source = v.source or self._params.source

                result = await self._params.database.create_many(
                    data=data,
                    resource=self._params.resource,
                )
                return result.result
            raise Exception("Database not initialized")
        else:
            logger.info("no data to upload")
            return []
