from lib_shared.core.utils.base_model.base_model import BaseModel

from lib_ai.data.base_data.base_data_models import BaseDataModel
from lib_ai.data.matrix_data.matrix_data import MatrixData
from lib_ai.model.trainable.trainable_models import TrainableModel
from lib_ai.scoring.scorer.accuracy_scorer.accuracy_scorer import accuracy_scorer
from lib_ai.scoring.scorer.cross_entropy_scorer.cross_entropy_scorer import (
    cross_entropy_scorer,
)
from lib_ai.scoring.scorer.f1_scorer.f1_scorer import f1_scorer
from lib_ai.scoring.scorer.recall_scorer.recall_scorer import recall_scorer


class BaseClassificationModel[
    TParams: BaseModel,
    TFit,
    TEval,
    TPred,
    TX: BaseDataModel,
    TY: BaseDataModel | None,
](
    TrainableModel[
        TParams,
        TFit,
        TEval,
        TPred,
        TX,
        TY,
    ]
):
    objective = cross_entropy_scorer
    scorer = [f1_scorer, accuracy_scorer, recall_scorer]

    def predict_probability(
        self,
        data: TX,
        params: TPred | None = None,
    ) -> MatrixData: ...
