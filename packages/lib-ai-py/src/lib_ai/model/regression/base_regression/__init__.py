from __future__ import annotations

from typing import Any, Mapping

from lib_ai.dataset.xy_dataset import XYDataset
from lib_ai.model.base_model import BaseModel
from lib_ai.model.base_model.base_model_models import (
    BaseModelEvalParamsModel,
    BaseModelFitParamsModel,
)
from lib_ai.model.regression.base_regression.base_regression_models import (
    BaseRegressionEvalParamsModel,
    BaseRegressionFitParamsModel,
    BaseRegressionModel,
    BaseRegressionParamsModel,
)
from lib_ai.scoring.scorer.mse_scorer import mse_scorer
from lib_shared.core.utils.merge import merge


class BaseRegression[
    TParams: BaseRegressionParamsModel,
    TDataset: XYDataset,
    TFit: BaseRegressionFitParamsModel,
    TEval: BaseRegressionEvalParamsModel,
](
    BaseModel[
        TParams,
        TDataset,
        TFit,
        TEval,
    ],
    BaseRegressionModel[
        TParams,
        TDataset,
        TFit,
        TEval,
    ],
):
    def __init__(self, params: TParams | None = None) -> None:
        super().__init__(params=params)

    def evaluate(
        self,
        dataset: TDataset,
        params: TEval | None = None,
    ) -> Mapping[str, float]:
        base_params: BaseModelEvalParamsModel = {"scorers": {"mean_squared_error": mse_scorer}}
        return super().evaluate(
            dataset,
            merge(params, base_params),
        )

    def fit(
        self,
        dataset: TDataset,
        params: TFit | None = None,
    ) -> None:
        base_params: BaseModelFitParamsModel = {"scorer": mse_scorer}
        return super().fit(
            dataset,
            merge(params, base_params),
        )
