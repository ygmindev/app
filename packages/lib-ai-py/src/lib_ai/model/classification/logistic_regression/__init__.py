from lib_ai.model.classification.base_classification import BaseClassification
from lib_ai.model.classification.logistic_regression.logistic_regression_models import (
    LogisticRegressionModel,
    LogisticRegressionParamsModel,
)
from lib_ai.model.utils.neural_network import NeuralNetwork
from lib_ai.model.utils.neural_network.layer.linear_layer import LinearLayer
from lib_ai.model.utils.neural_network.layer.softmax_layer import SoftmaxLayer
from lib_shared.core.utils.get_item import get_item
from lib_shared.core.utils.merge import merge


class LogisticRegression(
    BaseClassification,
    NeuralNetwork,
    LogisticRegressionModel,
):
    def __init__(
        self,
        params: LogisticRegressionParamsModel,
    ) -> None:
        n_classes = get_item(params, "n_classes")
        n_in = get_item(params, "n_in")
        super().__init__(
            params=merge(
                params,
                {
                    "is_classification": True,
                    "layers": [
                        LinearLayer(n_in=n_in, n_out=n_classes),
                        SoftmaxLayer(),
                    ],
                },
            )
        )
