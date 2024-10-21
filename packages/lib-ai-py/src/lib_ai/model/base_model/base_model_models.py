from __future__ import annotations

from abc import ABC, abstractmethod

from lib_ai.dataset.base_dataset import BaseDataset


class BaseModelModel[TTrain](ABC):
    @abstractmethod
    def predict(self, dataset: BaseDataset) -> None: ...

    @abstractmethod
    def test(self, dataset: BaseDataset) -> float: ...

    @abstractmethod
    def train(
        self,
        dataset: BaseDataset,
        params: TTrain | None = None,
    ) -> None: ...
