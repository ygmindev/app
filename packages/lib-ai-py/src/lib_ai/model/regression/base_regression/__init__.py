from __future__ import annotations

from typing import Mapping

from lib_ai.dataset.xy_dataset import XYDataset
from lib_ai.model.base_model import BaseModel
from lib_ai.model.base_model.base_model_models import BaseModelEvalParamsModel
from lib_ai.model.regression.base_regression.base_regression_models import (
    BaseRegressionModel,
    BaseRegressionModelEvalParamsModel,
    BaseRegressionModelFitParamsModel,
)
from lib_ai.scoring.scorer.mse_scorer import mse_scorer
from lib_shared.core.utils.merge import merge


class BaseRegression[
    TDataset: XYDataset,
    TFit: BaseRegressionModelFitParamsModel,
    TEval: BaseRegressionModelEvalParamsModel,
](
    BaseModel[
        TDataset,
        TFit,
        TEval,
    ],
    BaseRegressionModel[
        TDataset,
        TFit,
        TEval,
    ],
):
    def evaluate(
        self,
        dataset: TDataset,
        params: TEval | None = None,
    ) -> Mapping[str, float]:
        base_params: BaseRegressionModelEvalParamsModel = {
            "scorers": {"mean_squared_error": mse_scorer}
        }
        return super().evaluate(
            dataset,
            merge(params, base_params),
        )

    def fit(
        self,
        dataset: TDataset,
        params: TFit | None = None,
    ) -> None:
        base_params: BaseRegressionModelFitParamsModel = {"scorer": mse_scorer}
        return super().fit(
            dataset,
            merge(params, base_params),
        )
