from abc import ABC, abstractmethod

from torch.nn import Module

type _BaseLayerDataModel = Module


class _BaseLayerModel(ABC):
    @property
    @abstractmethod
    def layer(self) -> _BaseLayerDataModel: ...
