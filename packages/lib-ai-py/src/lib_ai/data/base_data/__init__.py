from __future__ import annotations

from typing import Any, Self, Tuple, Unpack, overload

import numpy as np
import torch
from lib_ai.core.utils.split_indices import split_indices
from lib_ai.data.base_data.base_data_models import BaseDataModel, SplitParamsModel
from lib_shared.core.core import DataType
from lib_shared.core.utils.get_item import get_item
from lib_shared.core.utils.indexable.indexable_models import (
    IndexableMultiKeyModel,
    IndexableSingleKeyModel,
)
from lib_shared.core.utils.is_listlike import is_listlike
from lib_shared.core.utils.not_implemented_exception import NotImplementedException


class BaseData[T](BaseDataModel[T]):
    def __init__(self, data: T) -> None:
        self._data = data

    @overload
    def __getitem__(self, key: IndexableSingleKeyModel) -> Self: ...

    @overload
    def __getitem__(self, key: IndexableMultiKeyModel) -> Any: ...

    def __getitem__(self, key: IndexableSingleKeyModel | IndexableMultiKeyModel) -> Self | Any:
        if is_listlike(key):
            return type(self)(data=[self.data[k] for k in key])
        return type(self)(data=self.data[key])

    def __len__(self) -> int:
        return len(self.data)

    def concat(self, other: Self) -> Self:
        return type(self)(data=self.data + other.data)

    def equals(self, other: Self) -> bool:
        return self.data == other.data

    def head(self, n_rows: int = 1) -> Self:
        return type(self)(data=self.data[:n_rows])

    @property
    def data(self) -> T:
        return self._data

    @data.setter
    def data(self, value: T) -> None:
        self._data = value

    def split(self, **params: Unpack[SplitParamsModel]) -> Tuple[Self, Self]:
        size = get_item(params, "size", 0.8)
        shuffle = get_item(params, "shuffle", False)
        stratify = get_item(params, "stratify", None)
        train_indices, test_indices = split_indices(
            n_rows=len(self),
            size=size,
            shuffle=shuffle,
            stratify=stratify,
        )
        return self[train_indices], self[test_indices]

    def to_numpy(
        self,
        _dtype: DataType | None = DataType.FLOAT,
    ) -> np.ndarray:
        return np.array(self.data)

    def to_tensor(
        self,
        _dtype: DataType | None = DataType.STRING,
    ) -> torch.Tensor:
        raise NotImplementedException()
