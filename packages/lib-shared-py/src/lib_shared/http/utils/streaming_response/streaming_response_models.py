from typing import Generic, TypeVar

TType = TypeVar("TType")


class StreamingResponseModel(Generic[TType]): ...
