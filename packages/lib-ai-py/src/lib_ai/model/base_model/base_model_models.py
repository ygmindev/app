from __future__ import annotations

from abc import ABC, abstractmethod

from lib_ai.dataset.base_dataset import BaseDataset


class BaseModelModel[TFit, TEval](ABC):
    @abstractmethod
    def predict(
        self,
        dataset: BaseDataset,
    ) -> None: ...

    @abstractmethod
    def evaluate(
        self,
        dataset: BaseDataset,
        params: TEval | None = None,
    ) -> float: ...

    @abstractmethod
    def fit(
        self,
        dataset: BaseDataset,
        params: TFit | None = None,
    ) -> None: ...
