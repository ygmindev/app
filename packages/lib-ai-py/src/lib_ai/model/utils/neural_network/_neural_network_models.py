from typing import NotRequired, Sequence, TypedDict

from lib_ai.dataset.xy_matrix_dataset import XYMatrixDataset
from lib_ai.model.base_model.base_model_constants import OPTIMIZER
from lib_ai.model.base_model.base_model_models import BaseModelModel
from lib_ai.model.utils.neural_network.layer import Layer
from lib_ai.scoring.scorer.base_scorer.base_scorer_models import BaseScorerCallableModel


class _NeuralNetworkParamsModel(TypedDict):
    layers: Sequence[Layer]


class _NeuralNetworkFitParamsModel(TypedDict):
    n_epochs: NotRequired[int]
    optimizer: NotRequired[OPTIMIZER]
    scorer: BaseScorerCallableModel


class _NeuralNetworkModel[TFit: _NeuralNetworkFitParamsModel, TEval, TScore](
    BaseModelModel[XYMatrixDataset, TFit, TEval, TScore]
): ...
