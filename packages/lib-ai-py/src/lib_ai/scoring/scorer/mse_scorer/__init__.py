from typing import Unpack

from lib_ai.scoring.scorer.mse_scorer._mse_scorer import _mse_scorer
from lib_ai.scoring.scorer.mse_scorer.mse_scorer_models import (
    MseScorerModel,
    MseScorerParamsModel,
)
from lib_ai.scoring.utils.scorer import scorer


@scorer(is_loss=True, name="mean squared error")
def mse_scorer(*params: Unpack[MseScorerParamsModel]) -> MseScorerModel:
    return _mse_scorer(*params)
