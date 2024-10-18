from abc import abstractmethod
from typing import Any, Self, Sequence

import polars as pl
import torch
from lib_ai.data.array_data.array_data_constants import ARRAY_DATA_TYPE
from lib_ai.data.base_data.base_data_models import BaseDataModel
from numpy.typing import NDArray

type _ArrayDataTypeModel = torch.Tensor | NDArray | pl.Series


class _ArrayDataModel(BaseDataModel[_ArrayDataTypeModel]):
    @classmethod
    @abstractmethod
    def from_list(
        cls,
        _data: Sequence[Any],
        _to: ARRAY_DATA_TYPE = ARRAY_DATA_TYPE.SERIES,
    ) -> Self: ...

    @abstractmethod
    def get_type(self) -> ARRAY_DATA_TYPE: ...

    @abstractmethod
    def to_series(self) -> pl.Series: ...
