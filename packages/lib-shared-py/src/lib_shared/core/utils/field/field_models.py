from typing import Callable, Generic, Optional, Protocol, TypeVar

TType = TypeVar("TType")


class FieldModel(Protocol, Generic[TType]):
    def __call__(
        self,
        default_value: Callable[[], TType],
        description: Optional[str] = None,
        is_private: bool = False,
    ) -> TType: ...
