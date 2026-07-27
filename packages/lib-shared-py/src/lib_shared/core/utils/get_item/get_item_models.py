from typing import Any, Protocol, TypeVar, overload

TType = TypeVar("TType")


class GetItemModel(Protocol):
    @overload
    def __call__(
        self,
        params: Any,
        path: str,
        default: TType | None = ...,
        cast: type[TType] = ...,
    ) -> TType | None: ...

    @overload
    def __call__(
        self,
        params: Any,
        path: str,
        default: str | None = ...,
        cast: None = ...,
    ) -> str | None: ...

    def __call__(
        self,
        params: Any,
        path: str,
        default: Any | None = None,
        cast: type[Any] | None = None,
    ) -> Any | None: ...
