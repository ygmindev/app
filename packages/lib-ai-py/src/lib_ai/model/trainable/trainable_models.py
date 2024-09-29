from abc import ABC, abstractmethod


class TrainableModel(ABC):
    @abstractmethod
    def train(self) -> None: ...
