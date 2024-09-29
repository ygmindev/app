from abc import abstractmethod

from lib_ai.data.data_models import DataModel
from lib_ai.dataset.dataset_models import DatasetModel


class LabeledDatasetModel(DatasetModel):
    @abstractmethod
    def __init__(self, data: DataModel, labels: DataModel) -> None:
        pass
