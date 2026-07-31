from __future__ import annotations

from lib_shared.core.utils.base_model.base_model import BaseModel

from lib_ai.data.base_data.base_data_models import BaseDataModel
from lib_ai.model.regression.base_regression.base_regression_models import (
    BaseRegressionModel,
)


class BaseRegression[
    TParams: BaseModel,
    TFit,
    TEval,
    TPred,
    TX: BaseDataModel,
    TY: BaseDataModel | None,
](
    BaseRegressionModel[
        TParams,
        TFit,
        TEval,
        TPred,
        TX,
        TY,
    ],
): ...
