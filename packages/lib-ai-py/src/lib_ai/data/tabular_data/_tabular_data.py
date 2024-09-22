from typing import Any, Mapping, Optional, Self, Sequence, Tuple, Union

import numpy as np
import polars as pl
from lib_ai.data.tabular_data._tabular_data_models import _TabularDataModel
from lib_ai.data.tabular_data.tabular_data_models import TabularDataKeyModel


class _TabularData(_TabularDataModel):
    def __add__(self, other: Self) -> Self:
        result = type(self)()
        result.data = pl.concat([self.data, other.data])
        return result

    def __getitem__(self, key: TabularDataKeyModel) -> Self:
        result = type(self)()
        result.data = self.data[key]
        return result

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
