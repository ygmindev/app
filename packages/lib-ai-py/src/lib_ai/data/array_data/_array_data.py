from typing import Any, Self, Sequence, cast, overload

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
from lib_shared.core.utils.is_listlike import is_listlike
from numpy.typing import NDArray


class _ArrayData(_ArrayDataModel):
    def __init__(self, data: _ArrayDataTypeModel) -> None:
        self._data = pl.Series(data) if is_listlike(data) else data

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
        result = self.data
        match self.get_type():
            case ARRAY_DATA_TYPE.TENSOR:
                result = torch.concatenate([cast(torch.Tensor, result), other.to_tensor()])
            case ARRAY_DATA_TYPE.NUMPY:
                result = np.concatenate([result, other.to_numpy()], axis=0)
            case ARRAY_DATA_TYPE.SERIES:
                result = pl.concat([cast(pl.Series, result), other.to_series()])
        return type(self)(data=result)

    @property
    def data(self) -> _ArrayDataTypeModel:
        return self._data

    @data.setter
    def data(self, value: _ArrayDataTypeModel) -> None:
        self._data = value

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
                result = cast(torch.Tensor, result)[:n_rows]
            case ARRAY_DATA_TYPE.NUMPY:
                result = cast(NDArray, result)[:n_rows]
            case ARRAY_DATA_TYPE.SERIES:
                result = cast(pl.Series, result).head(n_rows)
        return type(self)(data=result)

    def to_numpy(self) -> NDArray:
        match self.get_type():
            case ARRAY_DATA_TYPE.TENSOR:
                return cast(torch.Tensor, self.data).numpy()
            case ARRAY_DATA_TYPE.NUMPY:
                return cast(NDArray, self.data)
            case ARRAY_DATA_TYPE.SERIES:
                return cast(pl.Series, self.data).to_numpy()
            case _:
                raise InvalidTypeException()

    def to_tensor(self) -> torch.Tensor:
        match self.get_type():
            case ARRAY_DATA_TYPE.TENSOR:
                return cast(torch.Tensor, self.data)
            case ARRAY_DATA_TYPE.NUMPY:
                return torch.tensor(self.data)
            case ARRAY_DATA_TYPE.SERIES:
                return cast(pl.Series, self.data).to_torch().to(torch.float32)
            case _:
                raise InvalidTypeException()

    def to_series(self) -> pl.Series:
        match self.get_type():
            case ARRAY_DATA_TYPE.TENSOR:
                return pl.Series(cast(torch.Tensor, self.data).detach().cpu().numpy())
            case ARRAY_DATA_TYPE.NUMPY:
                return pl.Series(self.data)
            case ARRAY_DATA_TYPE.SERIES:
                return cast(pl.Series, self.data)
            case _:
                raise InvalidTypeException()
