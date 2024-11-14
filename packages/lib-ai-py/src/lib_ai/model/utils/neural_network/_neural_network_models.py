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
from lib_ai.scoring.scoring_constants import SCORING_MODE


class _NeuralNetworkParamsModel(TypedDict, total=False):
    layers: Sequence[BaseLayerModel]
    is_classification: NotRequired[bool]


class _NeuralNetworkFitParamsModel(BaseModelFitParamsModel):
    n_epochs: NotRequired[int]
    optimizer: NotRequired[OPTIMIZER]
    scoring_mode: SCORING_MODE


class _NeuralNetworkModel[
    TFit: _NeuralNetworkFitParamsModel,
    TEval: BaseModelEvalParamsModel,
](
    BaseModelModel[
        _NeuralNetworkParamsModel,
        XYMatrixDataset,
        TFit,
        TEval,
    ]
): ...
