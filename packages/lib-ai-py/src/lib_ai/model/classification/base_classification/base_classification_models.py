from __future__ import annotations

from lib_ai.dataset.xy_dataset import XYDataset
from lib_ai.model.base_model.base_model_models import (
    BaseModelEvalParamsModel,
    BaseModelModel,
)


class BaseClassificationModel[
    TDataset: XYDataset,
    TFit,
    TEval: BaseModelEvalParamsModel,
](
    BaseModelModel[
        TDataset,
        TFit,
        TEval,
    ]
): ...
