from abc import ABC, abstractmethod
from typing import Callable, NotRequired, TypedDict, Unpack

from lib_ai.model.base_model.base_model_constants import OPTIMIZER
from lib_ai.model.regression.regression_models import RegressionModel
from lib_ai.scoring.scorer.base_scorer.base_scorer_models import (
    BaseScorerModel,
    BaseScorerParamsModel,
)


class _LinearRegressionTrainParamsModel(TypedDict):
    n_epochs: NotRequired[int]
    optimizer: NotRequired[OPTIMIZER]
    scorer: NotRequired[Callable[[Unpack[BaseScorerParamsModel]], BaseScorerModel]]


class _LinearRegressionModel(RegressionModel[_LinearRegressionTrainParamsModel], ABC):
    @abstractmethod
    def __init__(self, n_features: int) -> None: ...
