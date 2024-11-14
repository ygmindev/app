from typing import Unpack

from lib_ai.model.utils.neural_network.layer.linear_layer._linear_layer_models import (
    _LinearLayerModel,
    _LinearLayerParamsModel,
)
from torch.nn import Linear


class _LinearLayer(_LinearLayerModel):
    def __init__(self, **params: Unpack[_LinearLayerParamsModel]) -> None:
        self._layer = Linear(
            in_features=params.get("n_in"),
            out_features=params.get("n_out"),
        )
