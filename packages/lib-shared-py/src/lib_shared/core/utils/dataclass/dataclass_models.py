from typing import Callable, Generic, Protocol, TypeVar

TType = TypeVar("TType")


class _DataclassModel(Protocol, Generic[TType]):
    def __call__(
        self,
    ) -> Callable[[type[TType]], type[TType]]: ...


DataclassModel = _DataclassModel
