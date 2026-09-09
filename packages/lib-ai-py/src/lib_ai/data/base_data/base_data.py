from __future__ import annotations

from typing import Self

import numpy as np
import torch
from lib_shared.core.constants import DataType
from lib_shared.core.utils.base_model.base_model import BaseModel


class BaseData[TType](BaseModel):
    data: TType

    def __len__(self) -> int:
        return len(self.data)

    def concat(
        self,
        other: Self,
    ) -> Self:
        return type(self)(data=self.data + other.data)

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
        dtype: DataType | None = DataType.FLOAT,
    ) -> np.ndarray:
        return np.array(self.data)

    def to_tensor(
        self,
        dtype: DataType | None = DataType.STRING,
    ) -> torch.Tensor:
        raise NotImplementedError()
