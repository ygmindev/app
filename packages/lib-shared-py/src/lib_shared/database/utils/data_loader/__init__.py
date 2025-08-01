from typing import Generic, Optional, Type

from lib_shared.core.utils.logger import logger
from lib_shared.database.utils.data_loader.data_loader_models import (
    DataLoaderModel,
    DataLoaderParams,
    TType,
)
from lib_shared.database.utils.database import Database
from lib_shared.database.utils.database import database as db


class DataLoader(DataLoaderModel, Generic[TType]):
    def __init__(
        self,
        params: DataLoaderParams,
    ) -> None:
        self._params = params

    async def load(
        self,
    ) -> list[TType]:
        raise NotImplementedError("load() method not implemented")

    async def upload(
        self,
    ) -> list[TType]:
        data = await self.load()
        if len(data):

            if self._params.database:
                return await self._params.database.create_many(
                    data=data,
                    resource=self._params.resource,
                )
            raise Exception("Database not initialized")
        else:
            logger.info("no data to upload")
            return []
