from abc import ABC, abstractmethod

from lib_ai.dataset import Dataset


class TestableModel(ABC):
    @abstractmethod
    def test(self, dataset: Dataset) -> None: ...
