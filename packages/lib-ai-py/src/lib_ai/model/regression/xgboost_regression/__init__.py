from lib_ai.model.regression.base_regression import BaseRegression
from lib_ai.model.regression.xgboost_regression._xgboost_regression import (
    _XgboostRegression,
)
from lib_ai.model.regression.xgboost_regression.xgboost_regression_models import (
    XgboostRegressionModel,
)


class XgboostRegression(
    _XgboostRegression,
    BaseRegression,
    XgboostRegressionModel,
): ...
