from typing import Unpack

from lib_ai.scoring.scorer.recall_scorer._recall_scorer_models import (
    _RecallScorerModel,
    _RecallScorerParamsModel,
)
from torcheval.metrics.classification.recall import MulticlassRecall


def _recall_scorer(*params: Unpack[_RecallScorerParamsModel]) -> _RecallScorerModel:
    [y_pred, y] = params
    return (
        MulticlassRecall()
        .update(
            y_pred.to_tensor(),
            y.to_tensor(),
        )
        .compute()
        .item()
    )
