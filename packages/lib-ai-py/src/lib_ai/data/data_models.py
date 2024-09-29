from abc import ABC, abstractmethod
from typing import Self, Sequence

type DataKeyModel = int | slice | Sequence[int]


class DataModel(ABC):
    @abstractmethod
    def __add__(self, other: Self) -> Self: ...

    @abstractmethod
    def __getitem__(self, key: DataKeyModel) -> Self: ...

    @abstractmethod
    def head(self, nrows: int = 1) -> Self: ...
