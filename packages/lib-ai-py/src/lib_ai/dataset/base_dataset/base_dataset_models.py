from abc import ABC, abstractmethod
from typing import Self, Sequence, Tuple, Unpack

from lib_ai.data.base_data.base_data_models import SplitParamsModel
from lib_shared.core.utils.indexable.indexable_models import IndexableModel

type BaseDatasetKeyModel = int | slice | Sequence[int]


class BaseDatasetModel(IndexableModel, ABC):
    @abstractmethod
    def head(self, n_rows: int = 1) -> Self: ...

    @abstractmethod
    def split(self, **params: Unpack[SplitParamsModel]) -> Tuple[Self, Self]: ...
