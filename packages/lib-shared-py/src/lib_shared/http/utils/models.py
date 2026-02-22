from typing import Generic, Optional, TypeVar

from lib_shared.core.utils.base_model import BaseModel
from lib_shared.http.utils.constants import HTTP_STATUS_CODE


TUri = TypeVar("TUri")


class UriModel(Generic[TUri]):
    host: Optional[str] = None
    params: Optional[TUri] = None
    pathname: Optional[str] = None
    port: Optional[str | int] = None


TRequest = TypeVar("TRequest")
TResponse = TypeVar("TResponse")


class HttpRequestModel(BaseModel, Generic[TRequest]):
    body: Optional[TRequest] = None
    headers: Optional[dict] = None


class HttpResponseModel(BaseModel, Generic[TResponse]):
    status_code: HTTP_STATUS_CODE
    body: Optional[TResponse]
