from typing import Generic, cast

from lib_shared.core.utils.merge import merge
from lib_shared.database.utils.api_data_loader.api_data_loader_models import (
    ApiDataLoaderModel,
    ApiDataLoaderParams,
)
from lib_shared.database.utils.data_loader import DataLoader
from lib_shared.database.utils.data_loader.data_loader_models import TType
from lib_shared.http.utils.constants import HTTP_CONTENT_TYPE
from lib_shared.http.utils.http_client import http_client


class ApiDataLoader(DataLoader, ApiDataLoaderModel, Generic[TType]):
    def __init__(
        self,
        params: ApiDataLoaderParams,
    ) -> None:
        super().__init__(params)
        self._params = params

    async def load(
        self,
    ) -> list[TType]:
        content_type = self._params.content_type or HTTP_CONTENT_TYPE.JSON
        result = await http_client.get(
            self._params.uri,
            response_type=self._params.response,
            params=self._params.params,
            headers=merge(
                {
                    "Accept-Encoding": "gzip, deflate, br, zstd",
                    "Content-Type": content_type.value,
                    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36",
                },
                self._params.headers or {},
            ),
        )
        data = cast(list[TType], self._params.transformer(result))
        return list(map(lambda v: self._params.resource(**v), data))
