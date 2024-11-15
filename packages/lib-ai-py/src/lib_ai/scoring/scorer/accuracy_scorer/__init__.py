from typing import Unpack

from lib_ai.scoring.scorer.accuracy_scorer._accuracy_scorer import _accuracy_scorer
from lib_ai.scoring.scorer.accuracy_scorer.accuracy_scorer_models import (
    AccuracyScorerModel,
    AccuracyScorerParamsModel,
)
from lib_ai.scoring.utils.scorer import scorer


@scorer()
def accuracy_scorer(*params: Unpack[AccuracyScorerParamsModel]) -> AccuracyScorerModel:
    return _accuracy_scorer(*params)
