from typing import Unpack

import torch
from lib_ai.scoring.scorer.cross_entropy_scorer._cross_entropy_scorer_models import (
    _CrossEntropyScorerModel,
    _CrossEntropyScorerParamsModel,
)
from lib_shared.core.core import DATA_TYPE


def _cross_entropy_scorer(
    *params: Unpack[_CrossEntropyScorerParamsModel],
) -> _CrossEntropyScorerModel:
    y_pred, y = params
    loss_function = torch.nn.CrossEntropyLoss()
    loss = loss_function(
        y_pred.to_tensor(),
        y.to_tensor(dtype=DATA_TYPE.LONG),
    )
    try:
        loss.backward()
    except Exception:
        ...
    return loss.item()
