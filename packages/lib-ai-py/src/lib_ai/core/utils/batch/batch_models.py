from typing import Generator, NotRequired, TypedDict

from lib_shared.core.utils.indexable.indexable_models import IndexableModel


class BatchParamsModel[T](TypedDict):
    data: IndexableModel[T]
    batch_size: int
    is_shuffle: NotRequired[bool]


type BatchModel[T] = Generator[T, T, T]
