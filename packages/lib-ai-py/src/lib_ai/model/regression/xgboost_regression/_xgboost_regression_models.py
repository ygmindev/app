from typing import NotRequired

from lib_ai.dataset.xy_matrix_dataset import XYMatrixDataset
from lib_ai.model.base_model.base_model_models import (
    BaseModelEvalParamsModel,
    BaseModelFitParamsModel,
)
from lib_ai.model.regression.base_regression.base_regression_models import (
    BaseRegressionModel,
    BaseRegressionParamsModel,
)


class _XgboostRegressionParamsModel(BaseRegressionParamsModel):
    learning_rate: NotRequired[float]
    max_depth: NotRequired[int]
    n_estimators: NotRequired[int]
    subsample: NotRequired[float]


class _XgboostRegressionFitParamsModel(BaseModelFitParamsModel): ...


class _XgboostRegressionEvalParamsModel(BaseModelEvalParamsModel): ...


class _XgboostRegressionModel(
    BaseRegressionModel[
        _XgboostRegressionParamsModel,
        XYMatrixDataset,
        _XgboostRegressionFitParamsModel,
        _XgboostRegressionEvalParamsModel,
    ],
): ...
