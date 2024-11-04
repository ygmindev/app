from abc import abstractmethod
from typing import NotRequired, TypedDict

from lib_ai.model.base_model.base_model_constants import OPTIMIZER
from lib_ai.model.classification.base_classification.base_classification_models import (
    BaseClassificationModel,
)
from lib_ai.scoring.scorer.base_scorer.base_scorer_models import BaseScorerCallableModel


class _LogisticRegressionFitParamsModel(TypedDict):
    n_epochs: NotRequired[int]
    optimizer: NotRequired[OPTIMIZER]
    scorer: NotRequired[BaseScorerCallableModel]


class _LogisticRegressionTestParamsModel(TypedDict):
    scorer: NotRequired[BaseScorerCallableModel]


class _LogisticRegressionModel(
    BaseClassificationModel[_LogisticRegressionFitParamsModel, _LogisticRegressionTestParamsModel]
):
    @abstractmethod
    def __init__(
        self,
        n_features: int,
    ) -> None: ...
