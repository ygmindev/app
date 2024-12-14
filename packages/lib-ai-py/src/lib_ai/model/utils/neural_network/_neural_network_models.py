from typing import NotRequired, Sequence, TypedDict

from lib_ai.dataset.xy_matrix_dataset import XYMatrixDataset
from lib_ai.model.base_model.base_model_constants import Optimizer
from lib_ai.model.base_model.base_model_models import (
    BaseModelEvalParamsModel,
    BaseModelFitParamsModel,
    BaseModelModel,
    BaseModelParamsModel,
    BaseModelPredParamsModel,
)
from lib_ai.model.utils.neural_network.layer.base_layer.base_layer_models import (
    BaseLayerModel,
)
from lib_ai.scoring.scoring_constants import ScoringMode


class _NeuralNetworkParamsModel(BaseModelParamsModel):
    layers: Sequence[BaseLayerModel]
    is_classification: NotRequired[bool]


class _NeuralNetworkFitParamsModel(BaseModelFitParamsModel):
    n_epochs: NotRequired[int]
    optimizer: NotRequired[Optimizer]
    scoring_mode: ScoringMode


class _NeuralNetworkModel[
    TFit: _NeuralNetworkFitParamsModel,
    TEval: BaseModelEvalParamsModel,
    TPred: BaseModelPredParamsModel,
](
    BaseModelModel[
        _NeuralNetworkParamsModel,
        XYMatrixDataset,
        TFit,
        TEval,
        TPred,
    ]
): ...
