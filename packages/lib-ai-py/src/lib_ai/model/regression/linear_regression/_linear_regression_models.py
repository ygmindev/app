from abc import ABC, abstractmethod
from typing import TypedDict

from lib_ai.model.regression.regression_models import RegressionModel


class _LinearRegressionTrainParamsModel(TypedDict):
    n_epochs: int


class _LinearRegressionModel(RegressionModel[_LinearRegressionTrainParamsModel], ABC):
    @abstractmethod
    def __init__(self, n_features: int) -> None: ...
