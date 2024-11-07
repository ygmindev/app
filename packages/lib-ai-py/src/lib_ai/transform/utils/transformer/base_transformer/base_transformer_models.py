from __future__ import annotations

from abc import ABC, abstractmethod

from lib_ai.dataset.xy_dataset import XYDataset


class BaseTransformerModel[
    TDataset: XYDataset,
    TFit,
](ABC):
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
