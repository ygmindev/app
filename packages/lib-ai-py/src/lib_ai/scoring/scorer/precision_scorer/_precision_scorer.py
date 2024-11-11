from typing import Unpack

from lib_ai.scoring.scorer.precision_scorer._precision_scorer_models import (
    _PrecisionScorerModel,
    _PrecisionScorerParamsModel,
)
from torcheval.metrics.classification.recall import MulticlassRecall


def _precision_scorer(*params: Unpack[_PrecisionScorerParamsModel]) -> _PrecisionScorerModel:
    [y_pred, y] = params
    return (
        MulticlassRecall(average="macro", num_classes=2)
        .update(
            y_pred.to_tensor(),
            y.to_tensor(),
        )
        .compute()
        .item()
    )
