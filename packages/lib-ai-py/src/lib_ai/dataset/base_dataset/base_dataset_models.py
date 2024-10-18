from abc import ABC, abstractmethod
from typing import Self, Sequence

type BaseDatasetKeyModel = int | slice | Sequence[int]


class BaseDatasetModel(ABC):
    @abstractmethod
    def __getitem__(self, key: BaseDatasetKeyModel) -> Self: ...

    @abstractmethod
    def head(self, n_rows: int = 1) -> Self: ...
