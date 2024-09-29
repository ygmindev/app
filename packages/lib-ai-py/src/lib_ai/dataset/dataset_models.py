from abc import ABC, abstractmethod
from typing import Self, Sequence

type DatasetKeyModel = int | slice | Sequence[int]


class DatasetModel(ABC):
    @abstractmethod
    def __add__(self, other: Self) -> Self: ...

    @abstractmethod
    def __getitem__(self, key: DatasetKeyModel) -> Self: ...

    @abstractmethod
    def head(self, nrows: int = 1) -> Self: ...
