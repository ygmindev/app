from typing import TypedDict

from lib_ai.dataset.xy_matrix_dataset import XYMatrixDataset
from lib_ai.model.base_model.base_model_models import (
    BaseModelEvalParamsModel,
    BaseModelPredParamsModel,
)
from lib_ai.model.classification.base_classification.base_classification_models import (
    BaseClassificationModel,
)
from lib_ai.model.utils.neural_network._neural_network_models import (
    _NeuralNetworkFitParamsModel,
)


class LogisticRegressionParamsModel(TypedDict):
    n_in: int
    n_classes: int


class LogisticrRegressionFitParamsModel(_NeuralNetworkFitParamsModel): ...


class LogisticRegressionEvalParamsModel(BaseModelEvalParamsModel): ...


class LogisticRegressionPredParamsModel(BaseModelPredParamsModel): ...


class LogisticRegressionModel(
    BaseClassificationModel[
        LogisticRegressionParamsModel,
        XYMatrixDataset,
        LogisticrRegressionFitParamsModel,
        LogisticRegressionEvalParamsModel,
        LogisticRegressionPredParamsModel,
    ],
): ...
