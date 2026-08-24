from typing import Generator, Protocol, TypeVar

from lib_shared.core.utils.indexable.indexable import Indexable

TType = TypeVar("TType")


class _BatchModel(Protocol[TType]):
    def __call__(
        self,
        data: Indexable[TType],
        batch_size: int,
        is_shuffle: bool = False,
    ) -> Generator[TType, TType, TType]: ...


BatchModel = _BatchModel
