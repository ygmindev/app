# template version: 1.0.0

from torch.nn import MSELoss

from lib_ai.data.matrix_data.matrix_data import MatrixData
from lib_ai.scoring.utils.scorable.scorable import scorable

from .mse_scorer_models import MseScorerModel


@scorable(name="mse", is_loss=True)
def _mse_scorer(
    y_pred: MatrixData,
    y: MatrixData,
) -> float:
    loss_function = MSELoss()
    loss = loss_function(
        y_pred.to_tensor().reshape((-1, 1)),
        y.to_tensor().reshape((-1, 1)),
    )
    try:
        loss.backward()
    except Exception:
        ...
    return loss.item()


mse_scorer: MseScorerModel = _mse_scorer
