from typing import TypedDict

from lib_ai.dataset.xy_matrix_dataset import XYMatrixDataset
from lib_ai.model.base_model.base_model_models import BaseModelEvalParamsModel
from lib_ai.model.regression.base_regression.base_regression_models import (
    BaseRegressionModel,
)
from lib_ai.model.utils.neural_network._neural_network_models import (
    _NeuralNetworkFitParamsModel,
)


class LinearRegressionParamsModel(TypedDict):
    n_in: int


class LinearRegressionModel(
    BaseRegressionModel[
        XYMatrixDataset,
        _NeuralNetworkFitParamsModel,
        BaseModelEvalParamsModel,
    ],
): ...
