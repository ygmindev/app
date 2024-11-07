from lib_ai.model.utils.neural_network.layer.linear_layer._linear_layer_models import (
    _LinearLayerModel,
)
from torch.nn import Linear


class _LinearLayer(_LinearLayerModel):
    def __init__(
        self,
        n_in: int,
        n_out: int,
    ) -> None:
        self._layer = Linear(
            in_features=n_in,
            out_features=n_out,
        )
