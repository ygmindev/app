from typing import TypedDict

from lib_ai.dataset.xy_matrix_dataset import XYMatrixDataset
from lib_ai.model.base_model.base_model_models import (
    BaseModelEvalParamsModel,
    BaseModelPredParamsModel,
)
from lib_ai.model.regression.base_regression.base_regression_models import (
    BaseRegressionModel,
    BaseRegressionParamsModel,
)
from lib_ai.model.utils.neural_network._neural_network_models import (
    _NeuralNetworkFitParamsModel,
)


class LinearRegressionParamsModel(BaseRegressionParamsModel):
    n_in: int


class LinearRegressionFitParamsModel(_NeuralNetworkFitParamsModel): ...


class LinearRegressionEvalParamsModel(BaseModelEvalParamsModel): ...


class LinearRegressionPredParamsModel(BaseModelPredParamsModel): ...


class LinearRegressionModel(
    BaseRegressionModel[
        LinearRegressionParamsModel,
        XYMatrixDataset,
        LinearRegressionFitParamsModel,
        LinearRegressionEvalParamsModel,
        LinearRegressionPredParamsModel,
    ],
): ...
