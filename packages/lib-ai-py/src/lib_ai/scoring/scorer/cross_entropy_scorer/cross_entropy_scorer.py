# template version: 1.0.0

import torch
from lib_shared.core.constants import DataType

from lib_ai.data.matrix_data.matrix_data import MatrixData
from lib_ai.scoring.utils.scorable.scorable import scorable


@scorable(name="cross_entropy")
def _cross_entropy_scorer(
    y_pred: MatrixData,
    y: MatrixData,
) -> float:
    loss_function = torch.nn.CrossEntropyLoss()
    loss = loss_function(
        y_pred.to_tensor(),
        y.to_tensor(dtype=DataType.LONG),
    )
    try:
        loss.backward()
    except Exception:
        ...
    return loss.item()


cross_entropy_scorer = _cross_entropy_scorer
