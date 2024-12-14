from typing import NotRequired

from lib_ai.dataset.xy_matrix_dataset import XYMatrixDataset
from lib_ai.model.regression.base_regression.base_regression_models import (
    BaseRegressionEvalParamsModel,
    BaseRegressionFitParamsModel,
    BaseRegressionModel,
    BaseRegressionParamsModel,
    BaseRegressionPredParamsModel,
)


class _XgboostRegressionParamsModel(BaseRegressionParamsModel):
    learning_rate: NotRequired[float]
    max_depth: NotRequired[int]
    n_estimators: NotRequired[int]
    subsample: NotRequired[float]


class _XgboostRegressionFitParamsModel(BaseRegressionFitParamsModel): ...


class _XgboostRegressionEvalParamsModel(BaseRegressionEvalParamsModel): ...


class _XgboostRegressionPredParamsModel(BaseRegressionPredParamsModel): ...


class _XgboostRegressionModel(
    BaseRegressionModel[
        _XgboostRegressionParamsModel,
        XYMatrixDataset,
        _XgboostRegressionFitParamsModel,
        _XgboostRegressionEvalParamsModel,
        _XgboostRegressionPredParamsModel,
    ],
): ...
