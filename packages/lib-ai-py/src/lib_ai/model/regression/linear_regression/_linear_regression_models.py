from abc import ABC, abstractmethod
from typing import NotRequired, TypedDict

from lib_ai.dataset.xy_matrix_dataset import XYMatrixDataset
from lib_ai.model.base_model.base_model_constants import OPTIMIZER
from lib_ai.model.regression.base_regression.base_regression_models import (
    BaseRegressionModel,
)
from lib_ai.scoring.scorer.base_scorer.base_scorer_models import BaseScorerCallableModel


class _LinearRegressionTrainParamsModel(TypedDict):
    n_epochs: NotRequired[int]
    optimizer: NotRequired[OPTIMIZER]
    scorer: NotRequired[BaseScorerCallableModel]


class _LinearRegressionEvalParamsModel(TypedDict):
    scorer: NotRequired[BaseScorerCallableModel]


class _LinearRegressionModel(
    BaseRegressionModel[
        XYMatrixDataset, _LinearRegressionTrainParamsModel, _LinearRegressionEvalParamsModel
    ],
): ...
