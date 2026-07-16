from typing import Optional, Protocol, Type, TypeVar, overload

TType = TypeVar("TType")


class GetEnvModel(Protocol):
    @overload
    def __call__(
        self,
        key: str,
        cast: Type[TType],
        default: Optional[TType] = ...,
        is_required: bool = ...,
    ) -> Optional[TType]: ...

    @overload
    def __call__(
        self,
        key: str,
        cast: None = ...,
        default: Optional[str] = ...,
        is_required: bool = ...,
    ) -> Optional[str]: ...

    def __call__(
        self,
        key: str,
        cast: Optional[Type[TType]] = None,
        default: Optional[TType] = None,
        is_required: bool = False,
    ) -> Optional[TType]: ...
