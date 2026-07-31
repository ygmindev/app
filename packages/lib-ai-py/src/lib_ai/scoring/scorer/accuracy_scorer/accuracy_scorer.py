# template version: 1.0.0

from torcheval.metrics.classification.accuracy import MulticlassAccuracy

from lib_ai.data.matrix_data.matrix_data import MatrixData

from .accuracy_scorer_models import AccuracyScorerModel


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


accuracy_scorer: AccuracyScorerModel = _accuracy_scorer
