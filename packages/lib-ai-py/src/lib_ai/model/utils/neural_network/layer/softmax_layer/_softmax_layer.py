import torch
from lib_ai.model.utils.neural_network.layer.softmax_layer._softmax_layer_models import (
    _SoftmaxLayerModel,
)


class _Layer(torch.nn.Module):
    def forward(self, x) -> torch.Tensor:
        return torch.nn.functional.softmax(x)


class _SoftmaxLayer(_SoftmaxLayerModel):
    def __init__(
        self,
    ) -> None:
        self._layer = _Layer()
