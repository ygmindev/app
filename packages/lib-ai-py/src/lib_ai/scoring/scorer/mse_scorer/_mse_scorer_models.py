from typing import TypedDict

from lib_ai.scoring.scorer.base_scorer.base_scorer_models import (
    BaseScorerCallableModel,
    BaseScorerParamsModel,
)

type _MseScorerParamsModel = BaseScorerParamsModel


class _MseScorerModel(TypedDict):
    mse: float


type _MseScorerCallableModel = BaseScorerCallableModel[_MseScorerModel]
