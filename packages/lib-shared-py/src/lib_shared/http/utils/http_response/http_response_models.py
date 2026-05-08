from typing import Generic, TypeVar

TType = TypeVar("TType")


class HttpResponseModel(Generic[TType]): ...
