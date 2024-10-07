from typing import Self

from lib_ai.data.array_data.array_data_models import ArrayDataModel
from lib_ai.data.base_data.base_data_models import BaseDataModel
from lib_ai.dataset.base_dataset import BaseDataset
from lib_ai.dataset.base_dataset.base_dataset_models import BaseDatasetKeyModel
from lib_ai.dataset.xy_dataset.xy_dataset_models import XYDatasetModel


class XYDataset(XYDatasetModel, BaseDataset):
    _x: BaseDataModel
    _y: ArrayDataModel

    def __init__(
        self,
        x: BaseDataModel,
        y: ArrayDataModel,
    ) -> None:
        self._x = x
        self._y = y

    def __add__(self, other: Self) -> Self:
        return type(self)(
            x=self.x + other.x,
            y=self.y + other.y,
        )

    def __getitem__(self, key: BaseDatasetKeyModel) -> Self:
        return type(self)(
            x=self.x[key],
            y=self.y[key],
        )

    def head(self, n_rows: int = 1) -> Self:
        return type(self)(
            x=self.x.head(n_rows),
            y=self.y.head(n_rows),
        )

    @property
    def x(self) -> BaseDataModel:
        return self._x

    @x.setter
    def x(self, value: BaseDataModel) -> None:
        self._x = value

    @property
    def y(self) -> ArrayDataModel:
        return self._y

    @y.setter
    def y(self, value: ArrayDataModel) -> None:
        self._y = value
