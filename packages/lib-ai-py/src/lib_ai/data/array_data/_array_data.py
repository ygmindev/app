from typing import Any, Self, Sequence, Tuple, cast, overload

import numpy as np
import polars as pl
import torch
from lib_ai.data.array_data._array_data_models import (
    _ArrayDataModel,
    _ArrayDataTypeModel,
)
from lib_ai.data.array_data.array_data_constants import ARRAY_DATA_TYPE
from lib_shared.core.utils.indexable.indexable_models import (
    IndexableMultiKeyModel,
    IndexableSingleKeyModel,
)
from lib_shared.core.utils.invalid_type_exception import InvalidTypeException
from numpy.typing import NDArray


class _ArrayData(_ArrayDataModel):
    def __init__(self, data: _ArrayDataTypeModel) -> None:
        self._data = data

    @overload
    def __getitem__(self, key: IndexableSingleKeyModel) -> Self: ...

    @overload
    def __getitem__(self, key: IndexableMultiKeyModel) -> Any: ...

    def __getitem__(self, key: IndexableSingleKeyModel | IndexableMultiKeyModel) -> Self | Any:
        result = self.data[key]
        if torch.is_tensor(result) or isinstance(result, (np.ndarray, pl.Series)):
            return type(self)(data=result)
        return result

    def __len__(self) -> int:
        return len(self.data)

    def concat(self, other: Self) -> Self:
        match self.get_type():
            case ARRAY_DATA_TYPE.TENSOR:
                result = torch.concatenate([self.to_tensor(), other.to_tensor()])
            case ARRAY_DATA_TYPE.NUMPY:
                result = np.concatenate([self.to_numpy(), other.to_numpy()], axis=0)
            case ARRAY_DATA_TYPE.SERIES:
                result = pl.concat([self.to_series(), other.to_series()])
        return type(self)(data=result)

    @property
    def data(self) -> _ArrayDataTypeModel:
        return self._data

    @data.setter
    def data(self, value: _ArrayDataTypeModel) -> None:
        self._data = value

    def equals(self, other: Self) -> bool:
        match self.get_type():
            case ARRAY_DATA_TYPE.TENSOR:
                return self.to_tensor().equal(other.to_tensor())
            case ARRAY_DATA_TYPE.NUMPY:
                return np.array_equal(self.to_numpy(), other.to_numpy())
            case ARRAY_DATA_TYPE.SERIES:
                return self.to_series().equals(other.to_series())
        raise InvalidTypeException()

    @classmethod
    def from_list(
        cls,
        data: Sequence[Any],
        to: ARRAY_DATA_TYPE = ARRAY_DATA_TYPE.SERIES,
    ) -> Self:
        result = None
        match to:
            case ARRAY_DATA_TYPE.TENSOR:
                result = torch.tensor(data)
            case ARRAY_DATA_TYPE.NUMPY:
                result = np.array(data)
            case ARRAY_DATA_TYPE.SERIES:
                result = pl.Series(data)
        if result is None:
            raise InvalidTypeException()
        return cls(data=result)

    def get_type(self) -> ARRAY_DATA_TYPE:
        if torch.is_tensor(self.data):
            return ARRAY_DATA_TYPE.TENSOR
        if isinstance(self.data, np.ndarray):
            return ARRAY_DATA_TYPE.NUMPY
        if isinstance(self.data, pl.Series):
            return ARRAY_DATA_TYPE.SERIES
        raise InvalidTypeException()

    def head(self, n_rows: int = 1) -> Self:
        result = self.data
        match self.get_type():
            case ARRAY_DATA_TYPE.TENSOR:
                result = self.to_tensor()[:n_rows]
            case ARRAY_DATA_TYPE.NUMPY:
                result = self.to_numpy()[:n_rows]
            case ARRAY_DATA_TYPE.SERIES:
                result = self.to_series().head(n_rows)
        return type(self)(data=result)

    @property
    def shape(self) -> Tuple[int, ...]:
        return self.data.shape

    def to_numpy(self) -> NDArray:
        match self.get_type():
            case ARRAY_DATA_TYPE.TENSOR:
                return self.to_tensor().numpy()
            case ARRAY_DATA_TYPE.NUMPY:
                return cast(NDArray, self.data)
            case ARRAY_DATA_TYPE.SERIES:
                return self.to_series().to_numpy()
            case _:
                raise InvalidTypeException()

    def to_tensor(self) -> torch.Tensor:
        match self.get_type():
            case ARRAY_DATA_TYPE.TENSOR:
                return cast(torch.Tensor, self.data)
            case ARRAY_DATA_TYPE.NUMPY:
                return torch.tensor(self.to_numpy())
            case ARRAY_DATA_TYPE.SERIES:
                return self.to_series().to_torch().to(torch.float32)
            case _:
                raise InvalidTypeException()

    def to_series(self) -> pl.Series:
        match self.get_type():
            case ARRAY_DATA_TYPE.TENSOR:
                return pl.Series(self.to_tensor().detach().cpu().numpy())
            case ARRAY_DATA_TYPE.NUMPY:
                return pl.Series(self.to_numpy())
            case ARRAY_DATA_TYPE.SERIES:
                return cast(pl.Series, self.data)
            case _:
                raise InvalidTypeException()
