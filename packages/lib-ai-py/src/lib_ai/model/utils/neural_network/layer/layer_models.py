from abc import ABC, abstractmethod


class LayerModel(ABC):
    @abstractmethod
    def test(self) -> None: ...
