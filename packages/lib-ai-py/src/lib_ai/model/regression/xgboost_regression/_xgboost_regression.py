from __future__ import annotations

from lib_ai.data.matrix_data import MatrixData
from lib_ai.dataset.xy_matrix_dataset import XYMatrixDataset
from lib_ai.model.base_model import BaseModel
from lib_ai.model.regression.base_regression import BaseRegression
from lib_ai.model.regression.xgboost_regression._xgboost_regression_models import (
    _XgboostRegressionEvalParamsModel,
    _XgboostRegressionFitParamsModel,
    _XgboostRegressionModel,
    _XgboostRegressionParamsModel,
)
from lib_shared.core.utils.get_item import get_item
from lib_shared.core.utils.not_found_exception import NotFoundException
from lib_shared.core.utils.set_item import set_item
from xgboost import XGBRegressor


class _XgboostRegression(
    BaseRegression[
        _XgboostRegressionParamsModel,
        XYMatrixDataset,
        _XgboostRegressionFitParamsModel,
        _XgboostRegressionEvalParamsModel,
    ],
    _XgboostRegressionModel,
):
    def __init__(self, params: _XgboostRegressionParamsModel | None = None) -> None:
        learning_rate = get_item(params, "learning_rate", 0.1)
        max_depth = int(get_item(params, "max_depth", 5))
        n_estimators = int(get_item(params, "n_estimators", 50))
        subsample = get_item(params, "subsample", 1)

        set_item(params, "n_estimators", n_estimators)
        set_item(params, "max_depth", max_depth)
        super().__init__(params=params)
        self._instance = XGBRegressor(
            # objective="reg:linear",
            learning_rate=learning_rate,
            max_depth=max_depth,
            n_estimators=n_estimators,
            subsample=subsample,
        )

    def predict(
        self,
        dataset: XYMatrixDataset,
    ) -> MatrixData:
        y_pred = self._instance.predict(dataset.x.to_numpy())
        return MatrixData(y_pred)

    def fit(
        self,
        dataset: XYMatrixDataset,
        params: _XgboostRegressionFitParamsModel | None = None,
    ) -> None:
        if dataset.y is None:
            raise NotFoundException("y")

        self._instance.fit(
            dataset.x.to_numpy(),
            dataset.y.to_numpy(),
            verbose=True,
        )
