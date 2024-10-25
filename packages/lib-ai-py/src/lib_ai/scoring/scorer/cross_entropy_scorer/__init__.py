from typing import Unpack

from lib_ai.scoring.scorer.cross_entropy_scorer._cross_entropy_scorer import (
    _cross_entropy_scorer,
)
from lib_ai.scoring.scorer.cross_entropy_scorer.cross_entropy_scorer_models import (
    CrossEntropyScorerModel,
    CrossEntropyScorerParamsModel,
)


def cross_entropy_scorer(*params: Unpack[CrossEntropyScorerParamsModel]) -> CrossEntropyScorerModel:
    return _cross_entropy_scorer(*params)
