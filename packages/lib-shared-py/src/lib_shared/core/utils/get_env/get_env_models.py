from typing import Any, Callable, Optional, Protocol, Type, TypeVar, Union, overload

TType = TypeVar("TType")

CastTypeModel = Union[type[TType], Callable[[str], TType]]


class GetEnvModel(Protocol):
    @overload
    def __call__(
        self,
        key: str,
        *,
        cast: Type[str],
        default: Optional[str] = None,
        required: bool = False,
    ) -> Optional[str]: ...

    @overload
    def __call__(
        self,
        key: str,
        *,
        cast: Type[int],
        default: Optional[int] = None,
        required: bool = False,
    ) -> Optional[int]: ...

    @overload
    def __call__(
        self,
        key: str,
        *,
        cast: Type[float],
        default: Optional[float] = None,
        required: bool = False,
    ) -> Optional[float]: ...

    @overload
    def __call__(
        self,
        key: str,
        *,
        cast: Callable[[str], TType],
        default: Optional[TType] = None,
        required: bool = False,
    ) -> Optional[TType]: ...

    @overload
    def __call__(
        self, key: str, *, default: Optional[str] = None, required: bool = False
    ) -> Optional[str]: ...

    def __call__(self, *args: Any, **kwargs: Any) -> Any: ...
