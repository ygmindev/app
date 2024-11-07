from lib_ai.model.utils.neural_network.layer.base_layer._base_layer_model import (
    _BaseLayerDataModel,
    _BaseLayerModel,
)


class BaseLayerModel(_BaseLayerModel):
    _layer: _BaseLayerDataModel

    @property
    def layer(self) -> _BaseLayerDataModel:
        return self._layer
