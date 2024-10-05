from abc import ABC, abstractmethod
from typing import NotRequired, TypedDict

from lib_ai.model.base_model.base_model_constants import OPTIMIZER
from lib_ai.model.regression.regression_models import RegressionModel


class _LinearRegressionTrainParamsModel(TypedDict):
    n_epochs: NotRequired[int]
    optimizer: NotRequired[OPTIMIZER]


class _LinearRegressionModel(RegressionModel[_LinearRegressionTrainParamsModel], ABC):
    @abstractmethod
    def __init__(self, n_features: int) -> None: ...
