from __future__ import annotations

from typing import Self, Tuple

import numpy as np

from lib_ai.core.utils.split_indices import split_indices
from lib_ai.data.base_data.base_data_models import BaseDataModel
from lib_ai.dataset.base_dataset.base_dataset_models import BaseDatasetKeyModel
from lib_ai.dataset.xy_dataset.xy_dataset_models import XYDatasetModel


class XYDataset[
    TX: BaseDataModel,
    TY: BaseDataModel | None,
](
    XYDatasetModel[TX, TY],
    BaseDataModel,
):
    def __init__(
        self,
        x: TX,
        y: TY | None = None,
    ) -> None:
        self._x = x
        self._y = y

    def __getitem__(
        self,
        key: BaseDatasetKeyModel,
    ) -> Self:
        return type(self)(
            x=self.x[key],
            y=None if self.y is None else self.y[key],
        )

    def head(
        self,
        n_rows: int = 1,
    ) -> Self:
        return type(self)(
            x=self.x.head(n_rows),
            y=None if self.y is None else self.y.head(n_rows),
        )

    def __len__(self) -> int:
        return len(self.x)

    def split(
        self,
        size: float = 0.8,
        is_shuffle: bool = False,
        stratify: np.ndarray | None = None,
        random_seed: int | None = None,
    ) -> Tuple[Self, Self]:
        train_indices, test_indices = split_indices(
            n_rows=len(self),
            size=size,
            is_shuffle=is_shuffle,
            stratify=stratify,
            random_seed=random_seed,
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
