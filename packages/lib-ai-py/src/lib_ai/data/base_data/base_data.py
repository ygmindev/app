from __future__ import annotations

from typing import Self

import numpy as np
import torch
from lib_shared.core.constants import DATA_TYPE
from lib_shared.core.utils.not_implemented_exception import NotImplementedException

from lib_ai.data.base_data.base_data_models import BaseDataModel


class BaseData[TType](BaseDataModel[TType]):
    def __init__(
        self,
        data: TType,
    ) -> None:
        self._data = data

    def __len__(self) -> int:
        return len(self._data)

    def concat(
        self,
        other: Self,
    ) -> Self:
        return type(self)(data=self.data + other.data)

    @property
    def data(self) -> TType:
        return self._data

    @data.setter
    def data(
        self,
        value: TType,
    ) -> None:
        self._data = value

    def equals(
        self,
        other: Self,
    ) -> bool:
        return self.data == other.data

    def head(
        self,
        n_rows: int = 1,
    ) -> Self:
        return type(self)(data=self.data[:n_rows])

    @property
    def shape(self) -> tuple[int, ...]: ...

    def to_numpy(
        self,
        dtype: DATA_TYPE | None = DATA_TYPE.FLOAT,
    ) -> np.ndarray:
        return np.array(self.data)

    def to_tensor(
        self,
        dtype: DATA_TYPE | None = DATA_TYPE.STRING,
    ) -> torch.Tensor:
        raise NotImplementedException()
