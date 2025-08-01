from typing import Callable, Generic, Optional, Type, cast

from lib_shared.core.utils.merge import merge
from lib_shared.database.utils.api_data_loader.api_data_loader_models import (
    ApiDataLoaderModel,
    TResponse,
)
from lib_shared.database.utils.data_loader import DataLoader
from lib_shared.database.utils.data_loader.data_loader_models import TType
from lib_shared.database.utils.database import Database
from lib_shared.database.utils.database import database as db
from lib_shared.http.utils.constants import HTTP_METHOD
from lib_shared.http.utils.http_client import http_client


class ApiDataLoader(DataLoader, ApiDataLoaderModel, Generic[TType]):
    def __init__(
        self,
        uri: str,
        response: Type[TResponse],
        resource: Type[TType],
        transformer: Callable[[TResponse], list[TType]],
        method: Optional[HTTP_METHOD] = HTTP_METHOD.GET,
        headers: Optional[dict] = None,
        params: Optional[dict] = None,
        database: Optional[Database] = db,
    ) -> None:
        super().__init__(
            resource=resource,
            database=database,
        )
        self._uri = uri
        self._response = response
        self._transformer = transformer
        self._method = method
        self._headers = headers
        self._params = params

    async def load(
        self,
    ) -> list[TType]:
        result = await http_client.get(
            self._uri,
            response_type=self._response,
            params=self._params,
            headers=merge(
                {
                    "Accept-Encoding": "gzip, deflate, br, zstd",
                    "Content-Type": "application/json",
                    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36",
                },
                self._headers or {},
            ),
        )
        data = cast(list[TType], self._transformer(result))
        return list(map(lambda v: self._resource(**v), data))
