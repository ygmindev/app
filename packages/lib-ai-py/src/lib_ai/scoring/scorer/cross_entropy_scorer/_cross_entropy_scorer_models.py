from typing import TypedDict

from lib_ai.scoring.scorer.base_scorer.base_scorer_models import (
    BaseScorerCallableModel,
    BaseScorerParamsModel,
)

type _CrossEntropyScorerParamsModel = BaseScorerParamsModel


class _CrossEntropyScorerModel(TypedDict):
    cross_entropy: float


type _CrossEntropyScorerCallableModel = BaseScorerCallableModel[_CrossEntropyScorerModel]
