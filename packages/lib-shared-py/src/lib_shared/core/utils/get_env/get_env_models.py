from typing import Protocol, Type, TypeVar, overload

TType = TypeVar("TType")


class GetEnvModel(Protocol):
    @overload
    def __call__(
        self,
        key: str,
        cast: Type[TType],
        default: TType | None = ...,
        is_required: bool = ...,
    ) -> TType | None: ...

    @overload
    def __call__(
        self,
        key: str,
        cast: None = ...,
        default: str | None = ...,
        is_required: bool = ...,
    ) -> str | None: ...

    def __call__(
        self,
        key: str,
        cast: Type[TType] | None = None,
        default: TType | None = None,
        is_required: bool = False,
    ) -> TType | None: ...
