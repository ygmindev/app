# template version: 1.0.0

from torcheval.metrics.classification.recall import MulticlassRecall

from lib_ai.data.matrix_data.matrix_data import MatrixData
from lib_ai.scoring.utils.scorable.scorable import scorable


@scorable(name="recall")
def _recall_scorer(
    y_pred: MatrixData,
    y: MatrixData,
) -> float:
    return (
        MulticlassRecall()
        .update(
            y_pred.to_tensor(),
            y.to_tensor(),
        )
        .compute()
        .item()
    )


recall_scorer = _recall_scorer
