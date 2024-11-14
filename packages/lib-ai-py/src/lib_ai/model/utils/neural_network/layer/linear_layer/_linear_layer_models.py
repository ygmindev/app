from abc import abstractmethod
from typing import TypedDict, Unpack

from lib_ai.model.utils.neural_network.layer.base_layer.base_layer_models import (
    BaseLayerModel,
)


class _LinearLayerParamsModel(TypedDict):
    n_in: int
    n_out: int


class _LinearLayerModel(BaseLayerModel):
    @abstractmethod
    def __init__(self, **params: Unpack[_LinearLayerParamsModel]) -> None: ...
