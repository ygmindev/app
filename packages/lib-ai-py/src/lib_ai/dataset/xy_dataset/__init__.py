from __future__ import annotations

from typing import Self, Tuple, Unpack

from lib_ai.core.utils.split_indices import split_indices
from lib_ai.data.base_data.base_data_models import BaseDataModel, SplitParamsModel
from lib_ai.dataset.base_dataset import BaseDataset
from lib_ai.dataset.base_dataset.base_dataset_models import BaseDatasetKeyModel
from lib_ai.dataset.xy_dataset.xy_dataset_models import XYDatasetModel
from lib_shared.core.utils.get_item import get_item


class XYDataset[TX: BaseDataModel, TY: BaseDataModel | None](XYDatasetModel[TX, TY], BaseDataset):
    _x: TX
    _y: TY | None = None

    def __init__(
        self,
        x: TX,
        y: TY | None = None,
    ) -> None:
        if y is not None:
            assert len(x) == len(y)
        self._x = x
        self._y = y

    def __getitem__(self, key: BaseDatasetKeyModel) -> Self:
        return type(self)(
            x=self.x[key],
            y=None if self.y is None else self.y[key],
        )

    def head(self, n_rows: int = 1) -> Self:
        return type(self)(
            x=self.x.head(n_rows),
            y=None if self.y is None else self.y.head(n_rows),
        )

    def __len__(self) -> int:
        return len(self.x)

    def split(self, **params: Unpack[SplitParamsModel]) -> Tuple[Self, Self]:
        train_size = get_item(params, "train_size")
        shuffle = get_item(params, "shuffle", False)
        stratify = get_item(params, "stratify", None)
        train_indices, test_indices = split_indices(
            n_rows=len(self),
            train_size=train_size,
            shuffle=shuffle,
            stratify=stratify,
        )
        return self[train_indices], self[test_indices]

    @property
    def x(self) -> TX:
        return self._x

    @x.setter
    def x(
        self,
        value: TX,
    ) -> None:
        self._x = value

    @property
    def y(self) -> TY | None:
        return self._y

    @y.setter
    def y(
        self,
        value: TY | None = None,
    ) -> None:
        self._y = value
