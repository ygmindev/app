from typing import Any, Mapping, Self, Sequence, Tuple

import numpy as np
import polars as pl
import torch
from lib_ai.data.tabular_data._tabular_data_models import (
    _TabularDataKeyModel,
    _TabularDataModel,
)


class _TabularData(_TabularDataModel):
    def __add__(self, other: Self) -> Self:
        result = type(self)()
        result.data = pl.concat([self.data, other.data])
        return result

    def __getitem__(self, key: _TabularDataKeyModel) -> Self:
        result = type(self)()
        result.data = self.data[key]
        return result

    def __len__(self) -> int:
        return len(self.data)

    @property
    def data(self) -> pl.DataFrame:
        return self._data

    @data.setter
    def data(self, value: pl.DataFrame) -> None:
        self._data = value

    @classmethod
    def from_dict(cls, data: Mapping[str, Sequence[Any]]) -> Self:
        result = cls()
        result.data = pl.DataFrame(data)
        return result

    def head(self, n_rows: int = 1) -> Self:
        result = type(self)()
        result.data = self.data.head(n_rows)
        return result

    @property
    def shape(self) -> Tuple[int, int]:
        return self.data.shape

    def to_numpy(self) -> np.ndarray:
        return self.data.to_numpy()

    def to_tensor(self) -> torch.Tensor:
        return self.data.to_torch().to(torch.float32)
