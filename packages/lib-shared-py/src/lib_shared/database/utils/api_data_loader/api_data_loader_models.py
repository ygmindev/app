from typing import Callable, Generic, Optional, Type, TypeVar

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
    response: Optional[Type[TResponse]]
    method: Optional[HTTP_METHOD] = HTTP_METHOD.GET
    content_type: Optional[HTTP_CONTENT_TYPE] = HTTP_CONTENT_TYPE.JSON
    headers: Optional[dict] = {}
    params: Optional[dict] = {}


class ApiDataLoaderModel(DataLoaderModel):
    def __init__(
        self,
        params: ApiDataLoaderParams,
    ) -> None: ...
