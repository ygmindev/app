from __future__ import annotations

from lib_ai.data.base_data.base_data_models import BaseDataModel
from lib_ai.model.base_model import BaseModel
from lib_ai.model.regression.base_regression.base_regression_models import (
    BaseRegressionEvalParamsModel,
    BaseRegressionFitParamsModel,
    BaseRegressionModel,
    BaseRegressionParamsModel,
    BaseRegressionPredParamsModel,
)
from lib_ai.scoring.scorer.mse_scorer import mse_scorer
from lib_shared.core.utils.merge import merge


# TODO: generic class https://github.com/pylint-dev/pylint/issues/9335
class BaseRegression[
    TParams: BaseRegressionParamsModel,
    TFit: BaseRegressionFitParamsModel,
    TEval: BaseRegressionEvalParamsModel,
    TPred: BaseRegressionPredParamsModel,
    TX: BaseDataModel,
    TY: BaseDataModel | None,
](
    BaseModel[
        TParams,
        TFit,
        TEval,
        TPred,
        TX,
        TY,
    ],
    BaseRegressionModel[
        TParams,
        TFit,
        TEval,
        TPred,
        TX,
        TY,
    ],
):
    def __init__(self, params: TParams | None = None) -> None:
        params = merge(
            {
                "scorers": [mse_scorer],
                "scorer": mse_scorer,
                "objective": mse_scorer,
            },
            params,
        )
        super().__init__(params=params)
