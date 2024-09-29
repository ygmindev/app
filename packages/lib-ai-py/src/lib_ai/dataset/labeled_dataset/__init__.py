from typing import Self

from lib_ai.data.data_models import DataModel
from lib_ai.dataset.dataset_models import DatasetKeyModel
from lib_ai.dataset.labeled_dataset.labeled_dataset_models import LabeledDatasetModel


class LabeledDataset(LabeledDatasetModel):
    _data: DataModel
    _labels: DataModel

    def __init__(
        self,
        data: DataModel,
        labels: DataModel,
    ) -> None:
        self._data = data
        self._labels = labels

    def __add__(self, other: Self) -> Self:
        return type(self)(
            data=self.data + other.data,
            labels=self.labels + other.labels,
        )

    def __getitem__(self, key: DatasetKeyModel) -> Self:
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
    def data(self) -> DataModel:
        return self._data

    @data.setter
    def data(self, value: DataModel) -> None:
        self._data = value

    @property
    def labels(self) -> DataModel:
        return self._labels

    @labels.setter
    def labels(self, value: DataModel) -> None:
        self._labels = value
