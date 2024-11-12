from __future__ import annotations

from abc import ABC, abstractmethod
from typing import Mapping, TypedDict

from lib_ai.data.matrix_data import MatrixData
from lib_ai.dataset.xy_dataset import XYDataset
from lib_ai.scoring.scorer.base_scorer.base_scorer_models import BaseScorerCallableModel


class BaseModelEvalParamsModel(TypedDict):
    scorers: Mapping[str, BaseScorerCallableModel]


class BaseModelFitParamsModel(TypedDict):
    scorer: BaseScorerCallableModel


class BaseModelModel[
    TDataset: XYDataset,
    TFit: BaseModelFitParamsModel,
    TEval: BaseModelEvalParamsModel,
](ABC):
    @abstractmethod
    def predict(
        self,
        dataset: TDataset,
    ) -> MatrixData: ...

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
