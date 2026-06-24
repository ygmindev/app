from typing import Any, Generic, TypeVar

TType = TypeVar("TType", bound=dict[str, Any])


class HttpRequestModel(Generic[TType]): ...
