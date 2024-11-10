from lib_ai.dataset.xy_dataset import XYDataset
from lib_ai.model.base_model.base_model_models import (
    BaseModelEvalParamsModel,
    BaseModelFitParamsModel,
    BaseModelModel,
)


class BaseClassificationModel[
    TDataset: XYDataset,
    TFit: BaseModelEvalParamsModel,
    TEval: BaseModelFitParamsModel,
](
    BaseModelModel[
        TDataset,
        TFit,
        TEval,
    ]
): ...
