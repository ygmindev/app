from typing import NotRequired, Sequence, TypedDict

from lib_ai.dataset.xy_matrix_dataset import XYMatrixDataset
from lib_ai.model.base_model.base_model_constants import OPTIMIZER
from lib_ai.model.base_model.base_model_models import (
    BaseModelEvalParamsModel,
    BaseModelFitParamsModel,
    BaseModelModel,
)
from lib_ai.model.utils.neural_network.layer.base_layer.base_layer_models import (
    BaseLayerModel,
)


class _NeuralNetworkParamsModel(TypedDict):
    layers: Sequence[BaseLayerModel]


class _NeuralNetworkFitParamsModel(BaseModelFitParamsModel):
    n_epochs: NotRequired[int]
    optimizer: NotRequired[OPTIMIZER]


class _NeuralNetworkModel[
    TFit: _NeuralNetworkFitParamsModel,
    TEval: BaseModelEvalParamsModel,
](
    BaseModelModel[
        XYMatrixDataset,
        TFit,
        TEval,
    ]
): ...
