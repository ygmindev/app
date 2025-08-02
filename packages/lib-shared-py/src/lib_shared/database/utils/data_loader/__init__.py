from typing import Generic

from lib_shared.core.utils.logger import logger
from lib_shared.database.utils.data_loader.data_loader_models import (
    DataLoaderModel,
    DataLoaderParams,
    TType,
)


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
