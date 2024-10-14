from typing import TypedDict

from lib_shared.core.utils.indexable.indexable_models import IndexableModel
from lib_shared.core.utils.iterable.iterable_models import IterableModel


class ChunksParamsModel[T](TypedDict):
    data: IndexableModel[T]
    chunk_size: int


class ChunksModel[T](IterableModel[T]):
    pass
