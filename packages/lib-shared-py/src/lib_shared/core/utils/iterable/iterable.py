from __future__ import annotations

from abc import ABC, abstractmethod
from collections.abc import Iterator


class Iterable[TType](ABC):
    @abstractmethod
    def __iter__(self) -> Iterator[TType]: ...
