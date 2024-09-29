from typing import Self

from lib_ai.data.base_data.base_data_models import BaseDataModel
from lib_ai.dataset.base_dataset import BaseDataset
from lib_ai.dataset.base_dataset.base_dataset_models import BaseDatasetKeyModel
from lib_ai.dataset.labeled_dataset.labeled_dataset_models import LabeledDatasetModel


class LabeledDataset(LabeledDatasetModel, BaseDataset):
    _data: BaseDataModel
    _labels: BaseDataModel

    def __init__(
        self,
        data: BaseDataModel,
        labels: BaseDataModel,
    ) -> None:
        self._data = data
        self._labels = labels

    def __add__(self, other: Self) -> Self:
        return type(self)(
            data=self.data + other.data,
            labels=self.labels + other.labels,
        )

    def __getitem__(self, key: BaseDatasetKeyModel) -> Self:
        return type(self)(
            data=self.data[key],
            labels=self.labels[key],
        )

    def head(self, nrows: int = 1) -> Self:
        return type(self)(
            data=self.data.head(nrows),
            labels=self.labels.head(nrows),
        )

    @property
    def data(self) -> BaseDataModel:
        return self._data

    @data.setter
    def data(self, value: BaseDataModel) -> None:
        self._data = value

    @property
    def labels(self) -> BaseDataModel:
        return self._labels

    @labels.setter
    def labels(self, value: BaseDataModel) -> None:
        self._labels = value
