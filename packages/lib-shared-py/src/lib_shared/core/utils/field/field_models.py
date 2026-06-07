from typing import Callable, Generic, Optional, Protocol, TypeVar

TType = TypeVar("TType")

MISSING = object()


class FieldModel(Protocol, Generic[TType]):
    def __call__(
        self,
        default: TType = MISSING,
        default_value: Optional[Callable[[], TType]] = None,
        description: Optional[str] = None,
        is_private: bool = False,
    ) -> TType: ...
