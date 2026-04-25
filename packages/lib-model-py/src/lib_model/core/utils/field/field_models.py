from typing import Callable, Protocol, TypeVar

TType = TypeVar("TType")


class _FieldModel(Protocol):
    def __call__(
        self,
        name: str,
    ) -> Callable[[type[TType]], type[TType]]: ...


FieldModel = _FieldModel
