from abc import ABC, abstractmethod

class TrainableModel(ABC):
    @abstractmethod
    def test(self) -> None: ...
