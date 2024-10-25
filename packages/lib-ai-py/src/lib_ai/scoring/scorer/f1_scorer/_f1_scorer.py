from typing import Unpack

from lib_ai.scoring.scorer.f1_scorer._f1_scorer_models import (
    _F1ScorerModel,
    _F1ScorerParamsModel,
)
from torcheval.metrics.classification.f1_score import MulticlassF1Score


def _f1_scorer(*params: Unpack[_F1ScorerParamsModel]) -> _F1ScorerModel:
    [y_pred, y] = params
    return MulticlassF1Score().update(y_pred.to_tensor(), y.to_tensor()).compute().item()
