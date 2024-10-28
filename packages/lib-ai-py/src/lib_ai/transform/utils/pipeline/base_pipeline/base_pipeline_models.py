from __future__ import annotations

from abc import ABC, abstractmethod

from lib_ai.dataset.base_dataset.base_dataset_models import BaseDatasetModel


class BasePipelineModel[T: BaseDatasetModel](ABC):
    @abstractmethod
    def fit(self, dataset: T) -> None: ...

    @abstractmethod
    def fit_transform(self, dataset: T) -> T: ...

    @abstractmethod
    def transform(self, dataset: T) -> T: ...
