from typing import Any, Self, Sequence, overload

import numpy as np
import polars as pl
import torch
from lib_ai.data.array_data._array_data_models import (
    _ArrayDataModel,
    _ArrayDataMultiKeyModel,
    _ArrayDataSingleKeyModel,
)
from lib_shared.core.utils.is_listlike import is_listlike


class _ArrayData(_ArrayDataModel):
    def __add__(self, other: Self) -> Self:
        result = type(self)()
        result.data = pl.concat([self.data, other.data])
        return result

    @overload
    def __getitem__(self, key: _ArrayDataSingleKeyModel) -> Self: ...

    @overload
    def __getitem__(self, key: _ArrayDataMultiKeyModel) -> Any: ...

    def __getitem__(self, key: _ArrayDataSingleKeyModel | _ArrayDataMultiKeyModel) -> Self | Any:
        value = self.data[key]
        if is_listlike(key):
            result = type(self)()
            result.data = value
            return result
        return value

    def __len__(self) -> int:
        return len(self.data)

    @property
    def data(self) -> pl.Series:
        return self._data

    @data.setter
    def data(self, value: pl.Series) -> None:
        self._data = value

    @classmethod
    def from_list(cls, data: Sequence[Any]) -> Self:
        result = cls()
        result.data = pl.Series(data)
        return result

    def head(self, n_rows: int = 1) -> Self:
        result = type(self)()
        result.data = self.data.head(n_rows)
        return result

    def to_numpy(self) -> np.ndarray:
        return self.data.to_numpy()

    def to_tensor(self) -> torch.Tensor:
        return self.data.to_torch().to(torch.float32)
