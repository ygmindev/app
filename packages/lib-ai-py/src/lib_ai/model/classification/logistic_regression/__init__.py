from typing import Unpack

from lib_ai.data.matrix_data import MatrixData
from lib_ai.dataset.xy_dataset import XYDataset
from lib_ai.model.classification.base_classification import BaseClassification
from lib_ai.model.classification.logistic_regression.logistic_regression_models import (
    LogisticRegressionModel,
    LogisticRegressionParamsModel,
)
from lib_ai.model.utils.neural_network import NeuralNetwork
from lib_ai.model.utils.neural_network.layer.linear_layer import LinearLayer
from lib_ai.model.utils.neural_network.layer.softmax_layer import SoftmaxLayer
from lib_shared.core.utils.get_item import get_item


class LogisticRegression(
    BaseClassification,
    NeuralNetwork,
    LogisticRegressionModel,
):
    def __init__(
        self,
        **params: Unpack[LogisticRegressionParamsModel],
    ) -> None:
        n_in = get_item(params, "n_in")
        n_classes = get_item(params, "n_classes")
        super().__init__(
            is_classification=True,
            layers=[
                LinearLayer(
                    n_in=n_in,
                    n_out=n_classes,
                ),
                SoftmaxLayer(),
            ],
        )

    def predict_probability(
        self,
        dataset: XYDataset,
    ) -> MatrixData: ...
