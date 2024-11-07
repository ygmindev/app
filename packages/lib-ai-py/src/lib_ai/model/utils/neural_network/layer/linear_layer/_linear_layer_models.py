from abc import abstractmethod

from lib_ai.model.utils.neural_network.layer.base_layer.base_layer_models import (
    BaseLayerModel,
)


class _LinearLayerModel(BaseLayerModel):
    @abstractmethod
    def __init__(
        self,
        n_in: int,
        n_out: int,
    ) -> None: ...
