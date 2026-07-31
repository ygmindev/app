from __future__ import annotations

from abc import ABC, abstractmethod
from typing import Any, Sequence, overload

from numpy import ndarray

type IndexableSingleKeyModel = int

type IndexableMultiKeyModel = Sequence[int] | slice | ndarray


class IndexableModel[TType](ABC):
    @abstractmethod
    @overload
    def __getitem__(
        self,
        key: IndexableSingleKeyModel,
    ) -> Any: ...

    @abstractmethod
    @overload
    def __getitem__(
        self,
        key: IndexableMultiKeyModel,
    ) -> TType: ...

    @abstractmethod
    def __len__(self) -> int: ...
