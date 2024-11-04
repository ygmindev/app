from typing import TypedDict

from lib_ai.scoring.scorer.base_scorer.base_scorer_models import (
    BaseScorerCallableModel,
    BaseScorerParamsModel,
)

type _AccuracyScorerParamsModel = BaseScorerParamsModel


class _AccuracyScorerModel(TypedDict):
    accuracy: float


type _AccuracyScorerCallableModel = BaseScorerCallableModel[_AccuracyScorerModel]
