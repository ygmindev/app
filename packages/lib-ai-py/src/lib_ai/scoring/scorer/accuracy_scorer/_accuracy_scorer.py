from typing import Unpack

from lib_ai.scoring.scorer.accuracy_scorer._accuracy_scorer_models import (
    _AccuracyScorerModel,
    _AccuracyScorerParamsModel,
)
from torcheval.metrics.classification.accuracy import MulticlassAccuracy


def _accuracy_scorer(*params: Unpack[_AccuracyScorerParamsModel]) -> _AccuracyScorerModel:
    [y_pred, y] = params
    return (
        MulticlassAccuracy(average="macro", num_classes=2)
        .update(
            y_pred.to_tensor(),
            y.to_tensor(),
        )
        .compute()
        .item()
    )
