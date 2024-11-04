from __future__ import annotations

from typing import TypedDict

from lib_ai.dataset.base_dataset.base_dataset_models import BaseDatasetModel
from lib_ai.model.base_model.base_model_models import BaseModelModel


class BaseRegressionScoreModel(TypedDict):
    mean_squared_error: float


class BaseRegressionModel[TDataset: BaseDatasetModel, TFit, TEval](
    BaseModelModel[TDataset, TFit, TEval, BaseRegressionScoreModel]
): ...
