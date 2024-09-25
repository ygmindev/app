from abc import ABC, abstractmethod
from typing import Self


class DataModel(ABC):
    @abstractmethod
    def __add__(self, other: Self) -> Self: ...

    @abstractmethod
    def head(self, nrows: int = 1) -> Self: ...
