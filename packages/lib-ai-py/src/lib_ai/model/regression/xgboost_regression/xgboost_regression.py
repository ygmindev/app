from __future__ import annotations

from lib_shared.core.errors.invalid_argument_error.invalid_argument_error import (
    InvalidArgumentError,
)
from lib_shared.core.utils.not_found_exception import NotFoundException
from lib_shared.core.utils.private_field.private_field import PrivateField
from xgboost import XGBRegressor

from lib_ai.data.matrix_data import MatrixData
from lib_ai.dataset.xy_dataset.xy_dataset import XYDataset
from lib_ai.model.regression.xgboost_regression.xgboost_regression_models import (
    XgboostRegressionModel,
    _XgboostRegressionModel,
)


class _XgboostRegression(_XgboostRegressionModel):
    _instance: XGBRegressor = PrivateField()

    def post_init(self) -> None:
        if not self.params:
            raise InvalidArgumentError("params")
        self._instance = XGBRegressor(
            # objective="reg:linear",
            learning_rate=self.params.learning_rate,
            max_depth=self.params.max_depth,
            n_estimators=self.params.n_estimators,
            subsample=self.params.subsample,
        )

    def predict(
        self,
        data: MatrixData,
        params: None = None,
    ) -> MatrixData:
        y_pred = self._instance.predict(data.to_numpy())
        return MatrixData(y_pred)

    def fit(
        self,
        dataset: XYDataset[MatrixData, MatrixData],
        params: None = None,
    ) -> None:
        if dataset.y is None:
            raise NotFoundException("y")

        self._instance.fit(
            dataset.x.to_numpy(),
            dataset.y.to_numpy(),
            verbose=True,
        )


class XgboostRegression(
    _XgboostRegression,
    XgboostRegressionModel,
): ...
