from typing import Unpack

from lib_ai.scoring.scorer.f1_scorer._f1_scorer import _f1_scorer
from lib_ai.scoring.scorer.f1_scorer.f1_scorer_models import (
    F1ScorerModel,
    F1ScorerParamsModel,
)
from lib_ai.scoring.utils.scorer import scorer


@scorer()
def f1_scorer(*params: Unpack[F1ScorerParamsModel]) -> F1ScorerModel:
    return _f1_scorer(*params)
