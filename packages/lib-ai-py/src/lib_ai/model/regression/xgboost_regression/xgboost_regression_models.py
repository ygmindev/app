# template version: 1.0.0

from lib_shared.core.utils.base_model.base_model import BaseModel

from lib_ai.data.matrix_data.matrix_data import MatrixData
from lib_ai.model.regression.base_regression.base_regression_models import (
    BaseRegressionModel,
)


class XgboostRegressionParamsModel(BaseModel):
    learning_rate: float = 0.1
    max_depth: int = 5
    n_estimators: int = 50
    subsample: float = 1


class XgboostRegressionModel(
    BaseRegressionModel[
        XgboostRegressionParamsModel,
        None,
        None,
        None,
        MatrixData,
        MatrixData,
    ]
): ...


class _XgboostRegressionModel(XgboostRegressionModel): ...
