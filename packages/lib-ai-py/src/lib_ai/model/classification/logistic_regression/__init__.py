from typing import Unpack

from lib_ai.model.classification.logistic_regression.logistic_regression_models import (
    LogisticRegressionModel,
    LogisticRegressionParamsModel,
)
from lib_ai.model.utils.neural_network import NeuralNetwork
from lib_ai.model.utils.neural_network.layer.linear_layer import LinearLayer


class LogisticRegression(NeuralNetwork, LogisticRegressionModel):
    def __init__(self, **params: Unpack[LogisticRegressionParamsModel]) -> None:
        super().__init__(
            layers=[
                LinearLayer(
                    n_in=params.get("n_in"),
                    n_out=1,
                )
            ]
        )
