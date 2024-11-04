from __future__ import annotations

from abc import ABC, abstractmethod
from typing import Mapping

from lib_ai.dataset.base_dataset.base_dataset_models import BaseDatasetModel


class BaseModelModel[TDataset: BaseDatasetModel, TFit, TEval, TScore](ABC):
    @abstractmethod
    def predict(
        self,
        dataset: TDataset,
    ) -> None: ...

    @abstractmethod
    def evaluate(
        self,
        dataset: TDataset,
        params: TEval | None = None,
    ) -> TScore: ...

    @abstractmethod
    def fit(
        self,
        dataset: TDataset,
        params: TFit | None = None,
    ) -> None: ...
