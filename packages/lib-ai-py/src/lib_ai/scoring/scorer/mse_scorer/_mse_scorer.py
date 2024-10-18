from typing import Unpack

import torch
from lib_ai.scoring.scorer.mse_scorer._mse_scorer_models import (
    _MseScorerModel,
    _MseScorerParamsModel,
)


def _mse_scorer(*params: Unpack[_MseScorerParamsModel]) -> _MseScorerModel:
    [y_pred, y] = params
    loss_function = torch.nn.MSELoss(reduction="mean")
    loss = loss_function(y_pred.to_tensor(), y.to_tensor().unsqueeze(1))
    loss.backward()
    return loss.item()
