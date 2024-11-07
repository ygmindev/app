from lib_ai.dataset.xy_dataset import XYDataset
from lib_ai.model.base_model.base_model_models import BaseModelEvalParamsModel
from lib_ai.model.classification.base_classification.base_classification_models import (
    BaseClassificationModel,
)


class BaseClassification[
    TDataset: XYDataset,
    TFit,
    TEval: BaseModelEvalParamsModel,
](
    BaseClassificationModel[
        TDataset,
        TFit,
        TEval,
    ]
): ...
