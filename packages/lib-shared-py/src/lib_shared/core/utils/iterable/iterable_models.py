from __future__ import annotations

from abc import ABC
from collections.abc import Iterator

from sklearn.naive_bayes import abstractmethod


class IterableModel[T](ABC):
    @abstractmethod
    def __iter__(self) -> Iterator[T]: ...
