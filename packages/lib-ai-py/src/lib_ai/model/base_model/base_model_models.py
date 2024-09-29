from abc import ABC, abstractmethod

from lib_ai.dataset.base_dataset import BaseDataset


class BaseModelModel(ABC):
    @abstractmethod
    def test(self, dataset: BaseDataset) -> None: ...

    @abstractmethod
    def train(self, dataset: BaseDataset) -> None: ...
