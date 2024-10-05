import torch
from lib_ai.scoring.scorer.mse_scorer._mse_scorer_models import (
    _MseScorerModel,
    _MseScorerParamsModel,
)


def _mse_scorer(params: _MseScorerParamsModel) -> _MseScorerModel:
    [y_pred, y] = params
    return torch.nn.MSELoss(reduction="mean")(y_pred.data, y.data)
