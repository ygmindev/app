from __future__ import annotations

from abc import ABC, abstractmethod

from lib_ai.dataset.base_dataset.base_dataset_models import BaseDatasetModel


class BaseTransformerModel[TDataset: BaseDatasetModel, TFit](ABC):
    def fit(
        self,
        _dataset: TDataset,
        _params: TFit | None = None,
    ) -> None: ...

    def fit_transform(
        self,
        dataset: TDataset,
        params: TFit | None = None,
    ) -> TDataset:
        self.fit(dataset, params)
        return self.transform(dataset)

    @abstractmethod
    def transform(
        self,
        dataset: TDataset,
    ) -> TDataset: ...
