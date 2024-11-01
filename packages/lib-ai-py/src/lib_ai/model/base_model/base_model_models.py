from __future__ import annotations

from abc import ABC, abstractmethod
from typing import Mapping

from lib_ai.data.base_data.base_data_models import BaseDataModel
from lib_ai.dataset.base_dataset.base_dataset_models import BaseDatasetModel


class BaseModelModel[TDataset: BaseDatasetModel, TFit, TEval](ABC):
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
    ) -> Mapping[str, float]: ...

    @abstractmethod
    def fit(
        self,
        dataset: TDataset,
        params: TFit | None = None,
    ) -> None: ...
