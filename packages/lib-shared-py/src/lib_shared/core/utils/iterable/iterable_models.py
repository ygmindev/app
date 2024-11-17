from __future__ import annotations

from abc import ABC, abstractmethod
from collections.abc import Iterator


class IterableModel[T](ABC):
    @abstractmethod
    def __iter__(self) -> Iterator[T]: ...
