from abc import abstractmethod

from lib_ai.data.array_data.array_data_models import ArrayDataModel
from lib_ai.data.base_data.base_data_models import BaseDataModel
from lib_ai.dataset.base_dataset.base_dataset_models import BaseDatasetModel


class XYDatasetModel(BaseDatasetModel):
    @abstractmethod
    def __init__(
        self,
        x: BaseDataModel,
        y: ArrayDataModel,
    ) -> None:
        pass
