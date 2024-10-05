from lib_ai.scoring.scorer.mse_scorer._mse_scorer import _mse_scorer
from lib_ai.scoring.scorer.mse_scorer.mse_scorer_models import MseScorerModel, MseScorerParamsModel


def mse_scorer(params: MseScorerParamsModel) -> MseScorerModel:
    return _mse_scorer(params)
