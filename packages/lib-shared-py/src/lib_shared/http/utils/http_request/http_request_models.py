from typing import Generic, TypeVar

TType = TypeVar("TType")


class HttpRequestModel(Generic[TType]): ...
