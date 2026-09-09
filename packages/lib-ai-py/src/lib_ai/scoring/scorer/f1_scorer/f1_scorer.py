# template version: 1.0.0

from torcheval.metrics.classification.f1_score import MulticlassF1Score

from lib_ai.data.matrix_data.matrix_data import MatrixData
from lib_ai.scoring.utils.scorable.scorable import scorable


@scorable(name="f1")
def _f1_scorer(
    y_pred: MatrixData,
    y: MatrixData,
) -> float:
    return (
        MulticlassF1Score()
        .update(
            y_pred.to_tensor(),
            y.to_tensor(),
        )
        .compute()
        .item()
    )


f1_scorer = _f1_scorer
