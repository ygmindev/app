from typing import Unpack

from lib_ai.scoring.scorer.recall_scorer._recall_scorer import _recall_scorer
from lib_ai.scoring.scorer.recall_scorer.recall_scorer_models import (
    RecallScorerModel,
    RecallScorerParamsModel,
)
from lib_ai.scoring.utils.scorer import scorer


@scorer(name="recall")
def recall_scorer(*params: Unpack[RecallScorerParamsModel]) -> RecallScorerModel:
    return _recall_scorer(*params)
