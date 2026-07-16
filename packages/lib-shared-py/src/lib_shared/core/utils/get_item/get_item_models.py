from typing import Any, Optional, Protocol, TypeVar, overload

TType = TypeVar("TType")


class GetItemModel(Protocol):
    @overload
    def __call__(
        self,
        params: Any,
        path: str,
        default: Optional[TType] = ...,
        cast: type[TType] = ...,
    ) -> Optional[TType]: ...

    @overload
    def __call__(
        self,
        params: Any,
        path: str,
        default: Optional[str] = ...,
        cast: None = ...,
    ) -> Optional[str]: ...

    def __call__(
        self,
        params: Any,
        path: str,
        default: Optional[Any] = None,
        cast: Optional[type[Any]] = None,
    ) -> Optional[Any]: ...
