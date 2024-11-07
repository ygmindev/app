from typing import TypedDict

from lib_ai.dataset.xy_matrix_dataset import XYMatrixDataset
from lib_ai.model.regression.base_regression.base_regression_models import (
    BaseRegressionModel,
    BaseRegressionModelEvalParamsModel,
    BaseRegressionModelFitParamsModel,
)


class LinearRegressionParamsModel(TypedDict):
    n_in: int


class LinearRegressionModel(
    BaseRegressionModel[
        XYMatrixDataset,
        BaseRegressionModelFitParamsModel,
        BaseRegressionModelEvalParamsModel,
    ],
): ...
