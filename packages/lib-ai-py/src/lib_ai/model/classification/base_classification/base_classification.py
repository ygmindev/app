from __future__ import annotations

from lib_shared.core.utils.base_model.base_model import BaseModel

from lib_ai.data.base_data.base_data_models import BaseDataModel
from lib_ai.model.classification.base_classification.base_classification_models import (
    BaseClassificationModel,
)


class BaseClassification[
    TParams: BaseModel,
    TFit,
    TEval,
    TPred,
    TX: BaseDataModel,
    TY: BaseDataModel | None,
](
    BaseClassificationModel[
        TParams,
        TFit,
        TEval,
        TPred,
        TX,
        TY,
    ],
): ...
