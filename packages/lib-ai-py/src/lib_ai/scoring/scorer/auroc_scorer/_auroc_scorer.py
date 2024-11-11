from typing import Unpack

from lib_ai.scoring.scorer.auroc_scorer._auroc_scorer_models import (
    _AurocScorerModel,
    _AurocScorerParamsModel,
)
from torcheval.metrics.classification.auroc import MulticlassAUROC


def _auroc_scorer(*params: Unpack[_AurocScorerParamsModel]) -> _AurocScorerModel:
    [y_pred, y] = params
    n_classes = len(y.to_tensor().unique())
    return (
        MulticlassAUROC(num_classes=n_classes)
        .update(
            y_pred.to_tensor().flatten(),
            y.to_tensor().flatten(),
        )
        .compute()
        .item()
    )
