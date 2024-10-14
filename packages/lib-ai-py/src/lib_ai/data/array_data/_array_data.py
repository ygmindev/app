from typing import Any, Self, Sequence, overload

import numpy as np
import polars as pl
import torch
from lib_ai.data.array_data._array_data_models import _ArrayDataModel
from lib_shared.core.utils.indexable.indexable_models import (
    IndexableMultiKeyModel,
    IndexableSingleKeyModel,
)
from lib_shared.core.utils.is_listlike import is_listlike


class _ArrayData(_ArrayDataModel):
    def __init__(self, data: Sequence | pl.Series | None = None) -> None:
        if data is not None:
            self._data = pl.Series(data) if is_listlike(data) else data

    def __add__(self, other: Self) -> Self:
        return type(self)(data=pl.concat([self.data, other.data]))

    @overload
    def __getitem__(self, key: IndexableSingleKeyModel) -> Self: ...

    @overload
    def __getitem__(self, key: IndexableMultiKeyModel) -> Any: ...

    def __getitem__(self, key: IndexableSingleKeyModel | IndexableMultiKeyModel) -> Self | Any:
        value = self.data[key]
        if is_listlike(key):
            return type(self)(data=value)
        return value

    def __len__(self) -> int:
        return len(self.data)

    def concat(self, other: Self) -> Self:
        return type(self)(data=pl.concat([self.data, other.data]))

    @property
    def data(self) -> pl.Series:
        return self._data

    @data.setter
    def data(self, value: pl.Series) -> None:
        self._data = value

    @classmethod
    def from_list(cls, data: Sequence[Any]) -> Self:
        return cls(data=pl.Series(data))

    def head(self, n_rows: int = 1) -> Self:
        return type(self)(data=self.data.head(n_rows))

    def to_numpy(self) -> np.ndarray:
        return self.data.to_numpy()

    def to_tensor(self) -> torch.Tensor:
        return self.data.to_torch().to(torch.float32)
