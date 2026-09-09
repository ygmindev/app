# template version: 1.0.0

from torcheval.metrics.classification.accuracy import MulticlassAccuracy

from lib_ai.data.matrix_data.matrix_data import MatrixData
from lib_ai.scoring.utils.scorable.scorable import scorable


@scorable(name="accuracy")
def _accuracy_scorer(
    y_pred: MatrixData,
    y: MatrixData,
) -> float:
    return (
        MulticlassAccuracy()
        .update(
            y_pred.to_tensor(),
            y.to_tensor(),
        )
        .compute()
        .item()
    )


accuracy_scorer = _accuracy_scorer
