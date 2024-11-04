from typing import TypedDict

from lib_ai.scoring.scorer.base_scorer.base_scorer_models import (
    BaseScorerCallableModel,
    BaseScorerParamsModel,
)

type _F1ScorerParamsModel = BaseScorerParamsModel


class _F1ScorerModel(TypedDict):
    f1: float


type _F1ScorerCallableModel = BaseScorerCallableModel[_F1ScorerModel]
