from __future__ import annotations

from typing import TypedDict

from lib_shared.core.utils.indexable.indexable_models import IndexableModel
from lib_shared.core.utils.iterable.iterable_models import IterableModel


class _BatchParamsModel[T](TypedDict):
    data: IndexableModel[T]
    batch_size: int


class _BatchModel[T](IterableModel[T]): ...
