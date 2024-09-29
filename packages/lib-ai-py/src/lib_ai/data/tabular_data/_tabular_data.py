from typing import Any, Mapping, Self, Sequence, Tuple, Unpack

import numpy as np
import polars as pl
from lib_ai.core.utils.split_indices import split_indices
from lib_ai.data.data_models import SplitParamsModel
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

    def head(self, nrows: int = 1) -> Self:
        result = type(self)()
        result.data = self.data.head(nrows)
        return result

    @property
    def shape(self) -> Tuple[int, int]:
        return self.data.shape

    def to_numpy(self) -> np.ndarray:
        return self.data.to_numpy()
