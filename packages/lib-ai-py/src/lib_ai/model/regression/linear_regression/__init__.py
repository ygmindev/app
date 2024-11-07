from typing import Unpack

from lib_ai.model.regression.base_regression import BaseRegression
from lib_ai.model.regression.linear_regression.linear_regression_models import (
    LinearRegressionModel,
    LinearRegressionParamsModel,
)
from lib_ai.model.utils.neural_network import NeuralNetwork
from lib_ai.model.utils.neural_network.layer.linear_layer import LinearLayer


class LinearRegression(
    BaseRegression,
    NeuralNetwork,
    LinearRegressionModel,
):
    def __init__(self, **params: Unpack[LinearRegressionParamsModel]) -> None:
        super().__init__(
            layers=[
                LinearLayer(
                    n_in=params.get("n_in"),
                    n_out=1,
                )
            ]
        )
