from lib_ai.model.utils.neural_network.layer.softmax_layer._softmax_layer_models import (
    _SoftmaxLayerModel,
)
from torch.nn import Softmax


class _SoftmaxLayer(_SoftmaxLayerModel):
    def __init__(
        self,
    ) -> None:
        self._layer = Softmax(dim=1)
