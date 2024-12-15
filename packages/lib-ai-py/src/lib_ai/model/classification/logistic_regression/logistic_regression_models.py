from lib_ai.data.matrix_data import MatrixData
from lib_ai.model.base_model.base_model_models import (
    BaseModelEvalParamsModel,
    BaseModelPredParamsModel,
)
from lib_ai.model.classification.base_classification.base_classification_models import (
    BaseClassificationModel,
    BaseClassificationParamsModel,
)
from lib_ai.model.utils.neural_network._neural_network_models import (
    _NeuralNetworkFitParamsModel,
)


class LogisticRegressionParamsModel(BaseClassificationParamsModel):
    n_in: int
    n_classes: int


class LogisticrRegressionFitParamsModel(_NeuralNetworkFitParamsModel): ...


class LogisticRegressionEvalParamsModel(BaseModelEvalParamsModel): ...


class LogisticRegressionPredParamsModel(BaseModelPredParamsModel): ...


class LogisticRegressionModel(
    BaseClassificationModel[
        LogisticRegressionParamsModel,
        LogisticrRegressionFitParamsModel,
        LogisticRegressionEvalParamsModel,
        LogisticRegressionPredParamsModel,
        MatrixData,
        MatrixData,
    ],
): ...
