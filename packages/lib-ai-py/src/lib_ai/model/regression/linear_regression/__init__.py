from lib_ai.model.regression.base_regression import BaseRegression
from lib_ai.model.regression.linear_regression.linear_regression_models import (
    LinearRegressionModel,
    LinearRegressionParamsModel,
)
from lib_ai.model.utils.neural_network import NeuralNetwork
from lib_ai.model.utils.neural_network.layer.linear_layer import LinearLayer
from lib_shared.core.utils.get_item import get_item
from lib_shared.core.utils.merge import merge


class LinearRegression(
    BaseRegression,
    NeuralNetwork,
    LinearRegressionModel,
):
    def __init__(
        self,
        params: LinearRegressionParamsModel,
    ) -> None:
        n_in = get_item(params, "n_in")
        super().__init__(
            params=merge(
                params,
                {
                    "layers": [
                        LinearLayer(n_in=n_in, n_out=1),
                    ]
                },
            )
        )
