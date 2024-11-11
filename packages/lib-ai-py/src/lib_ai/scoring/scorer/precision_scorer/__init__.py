from typing import Unpack

from lib_ai.scoring.scorer.precision_scorer._precision_scorer import _precision_scorer
from lib_ai.scoring.scorer.precision_scorer.precision_scorer_models import (
    PrecisionScorerModel,
    PrecisionScorerParamsModel,
)


def precision_scorer(*params: Unpack[PrecisionScorerParamsModel]) -> PrecisionScorerModel:
    return _precision_scorer(*params)
