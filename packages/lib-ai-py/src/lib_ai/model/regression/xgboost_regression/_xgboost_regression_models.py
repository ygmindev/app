from typing import NotRequired, TypedDict

from lib_ai.dataset.xy_matrix_dataset import XYMatrixDataset
from lib_ai.model.base_model.base_model_models import (
    BaseModelEvalParamsModel,
    BaseModelFitParamsModel,
)
from lib_ai.model.regression.base_regression.base_regression_models import (
    BaseRegressionModel,
)


class _XgboostRegressionParamsModel(TypedDict, total=False):
    n_estimators: NotRequired[int]
    max_depth: NotRequired[int]


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
