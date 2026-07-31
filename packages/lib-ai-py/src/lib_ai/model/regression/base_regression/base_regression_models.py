from lib_shared.core.utils.base_model.base_model import BaseModel

from lib_ai.data.base_data.base_data_models import BaseDataModel
from lib_ai.model.trainable.trainable_models import TrainableModel
from lib_ai.scoring.scorer.mse_scorer_bu import mse_scorer


class BaseRegressionModel[
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
    scorer = [mse_scorer]
