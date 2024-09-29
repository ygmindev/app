from abc import abstractmethod

from lib_ai.data.base_data.base_data_models import BaseDataModel
from lib_ai.dataset.base_dataset.base_dataset_models import BaseDatasetModel


class LabeledDatasetModel(BaseDatasetModel):
    @abstractmethod
    def __init__(
        self,
        data: BaseDataModel,
        labels: BaseDataModel,
    ) -> None:
        pass
