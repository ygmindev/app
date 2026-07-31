from __future__ import annotations

from typing import Self

import numpy as np
import torch
from lib_shared.core.constants import DATA_TYPE


class BaseDataModel[TType]:
    def __init__(
        self,
        data: TType,
    ) -> None: ...

    def __len__(self) -> int: ...

    def concat(
        self,
        other: Self,
    ) -> Self: ...

    @property
    def data(self) -> TType: ...

    @data.setter
    def data(
        self,
        value: TType,
    ) -> None: ...

    def equals(
        self,
        other: Self,
    ) -> bool: ...

    def head(
        self,
        n_rows: int = 1,
    ) -> Self: ...

    @property
    def shape(self) -> tuple[int, ...]: ...

    def to_numpy(
        self,
        dtype: DATA_TYPE | None,
    ) -> np.ndarray: ...

    def to_tensor(
        self,
        dtype: DATA_TYPE | None,
    ) -> torch.Tensor: ...
