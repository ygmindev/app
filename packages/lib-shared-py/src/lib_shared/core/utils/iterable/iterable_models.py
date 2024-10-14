from __future__ import annotations

from abc import ABC
from typing import Iterable

from sklearn.naive_bayes import abstractmethod


class IterableModel[T](ABC):
    @abstractmethod
    def __iter__(self) -> Iterable[T]: ...

    @abstractmethod
    def __next__(self) -> T: ...
