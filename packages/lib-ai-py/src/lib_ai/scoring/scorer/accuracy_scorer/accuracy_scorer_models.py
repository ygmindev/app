# template version: 1.0.0

from typing import Protocol

from lib_ai.data.matrix_data import MatrixData


class _AccuracyScorerModel(Protocol):
    def __call__(
        self,
        y_pred: MatrixData,
        y: MatrixData,
    ) -> float: ...


AccuracyScorerModel = _AccuracyScorerModel
