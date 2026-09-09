# template version: 1.0.0

from torcheval.metrics.classification.auroc import MulticlassAUROC

from lib_ai.data.matrix_data.matrix_data import MatrixData
from lib_ai.scoring.utils.scorable.scorable import scorable


@scorable(name="auroc")
def _auroc_scorer(
    y_pred: MatrixData,
    y: MatrixData,
) -> float:
    n_classes = len(y.to_tensor().unique())
    return (
        MulticlassAUROC(num_classes=n_classes)
        .update(
            y_pred.to_tensor().flatten(),
            y.to_tensor().flatten(),
        )
        .compute()
        .item()
    )


auroc_scorer = _auroc_scorer
