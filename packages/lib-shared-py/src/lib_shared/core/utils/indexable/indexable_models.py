from __future__ import annotations

from abc import ABC, abstractmethod
from typing import Any, Sequence, overload

type IndexableSingleKeyModel = int

type IndexableMultiKeyModel = Sequence[int] | slice


class IndexableModel[T](ABC):
    @abstractmethod
    @overload
    def __getitem__(self, _key: IndexableSingleKeyModel) -> Any: ...

    @abstractmethod
    @overload
    def __getitem__(self, _key: IndexableMultiKeyModel) -> T: ...

    @abstractmethod
    def __len__(self) -> int: ...
