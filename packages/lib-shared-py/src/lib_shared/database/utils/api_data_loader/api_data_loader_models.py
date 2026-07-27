from typing import Callable, Generic, Type, TypeVar

import attr

from lib_shared.database.utils.data_loader.data_loader_models import (
    DataLoaderModel,
    DataLoaderParams,
    TType,
)
from lib_shared.http.utils.constants import HTTP_CONTENT_TYPE, HTTP_METHOD

TResponse = TypeVar("TResponse")


@attr.s(auto_attribs=True, kw_only=True)
class ApiDataLoaderParams(DataLoaderParams[TType], Generic[TType, TResponse]):
    uri: str
    transformer: Callable[[TResponse], list[TType]]
    response: Type[TResponse] | None = None
    method: HTTP_METHOD | None = HTTP_METHOD.GET
    content_type: HTTP_CONTENT_TYPE | None = HTTP_CONTENT_TYPE.JSON
    headers: dict | None = {}
    params: dict | None = {}


class ApiDataLoaderModel(DataLoaderModel):
    def __init__(
        self,
        params: ApiDataLoaderParams,
    ) -> None: ...
