from typing import Any, Mapping, Self, Sequence, Tuple, cast, overload

import numpy as np
import polars as pl
import torch
from lib_ai.data.array_data import ArrayData
from lib_ai.data.array_data.array_data_models import ArrayDataModel
from lib_ai.data.tabular_data._tabular_data_models import (
    _TabularDataKeyModel,
    _TabularDataModel,
    _TabularDataStringKeyModel,
    _TabularDataTypeModel,
)
from lib_ai.data.tabular_data.tabular_data_constants import TABULAR_DATA_TYPE
from lib_shared.core.utils.invalid_type_exception import InvalidTypeException
from numpy.typing import NDArray


class _TabularData(_TabularDataModel):
    def __init__(self, data: _TabularDataTypeModel) -> None:
        self._data = data

    @overload
    def __getitem__(self, key: _TabularDataStringKeyModel) -> ArrayDataModel: ...

    @overload
    def __getitem__(self, key: _TabularDataKeyModel) -> Self: ...

    def __getitem__(
        self, key: _TabularDataStringKeyModel | _TabularDataKeyModel
    ) -> ArrayDataModel | Self:
        if isinstance(key, str):
            if isinstance(self.data, pl.DataFrame):
                return ArrayData(self.data[key])
            raise InvalidTypeException()
        return type(self)(data=self.data[cast(int | Sequence[int] | slice, key)])

    def __len__(self) -> int:
        return len(self.data)

    def concat(self, other: Self) -> Self:
        result = self.data
        match self.get_type():
            case TABULAR_DATA_TYPE.TENSOR:
                result = torch.concatenate([cast(torch.Tensor, result), other.to_tensor()])
            case TABULAR_DATA_TYPE.NUMPY:
                result = np.concatenate([result, other.to_numpy()], axis=0)
            case TABULAR_DATA_TYPE.DATAFRAME:
                result = pl.concat([cast(pl.DataFrame, result), other.to_dataframe()])
        return type(self)(data=result)

    @property
    def data(self) -> _TabularDataTypeModel:
        return self._data

    @data.setter
    def data(self, value: _TabularDataTypeModel) -> None:
        self._data = value

    @classmethod
    def from_dict(
        cls,
        data: Mapping[str, Sequence[Any]],
        to: TABULAR_DATA_TYPE = TABULAR_DATA_TYPE.DATAFRAME,
    ) -> Self:
        result = None
        match to:
            case TABULAR_DATA_TYPE.TENSOR:
                result = torch.tensor(data)
            case TABULAR_DATA_TYPE.NUMPY:
                result = np.array(data)
            case TABULAR_DATA_TYPE.DATAFRAME:
                result = pl.DataFrame(data)
        if result is None:
            raise InvalidTypeException()
        return cls(data=result)

    def get_type(self) -> TABULAR_DATA_TYPE:
        if torch.is_tensor(self.data):
            return TABULAR_DATA_TYPE.TENSOR
        if isinstance(self.data, np.ndarray):
            return TABULAR_DATA_TYPE.NUMPY
        if isinstance(self.data, pl.DataFrame):
            return TABULAR_DATA_TYPE.DATAFRAME
        raise InvalidTypeException()

    def head(self, n_rows: int = 1) -> Self:
        result = self.data
        match self.get_type():
            case TABULAR_DATA_TYPE.TENSOR:
                result = cast(torch.Tensor, result)[:n_rows]
            case TABULAR_DATA_TYPE.NUMPY:
                result = cast(NDArray, result)[:n_rows]
            case TABULAR_DATA_TYPE.DATAFRAME:
                result = cast(pl.DataFrame, result).head(n_rows)
        return type(self)(data=result)

    @property
    def shape(self) -> Tuple[int, ...]:
        match self.get_type():
            case TABULAR_DATA_TYPE.TENSOR:
                return tuple(cast(torch.Tensor, self.data).shape)
            case TABULAR_DATA_TYPE.NUMPY:
                return cast(NDArray, self.data).shape
            case TABULAR_DATA_TYPE.DATAFRAME:
                return cast(pl.DataFrame, self.data).shape
            case _:
                raise InvalidTypeException()

    def to_numpy(self) -> NDArray:
        match self.get_type():
            case TABULAR_DATA_TYPE.TENSOR:
                return cast(torch.Tensor, self.data).numpy()
            case TABULAR_DATA_TYPE.NUMPY:
                return cast(NDArray, self.data)
            case TABULAR_DATA_TYPE.DATAFRAME:
                return cast(pl.DataFrame, self.data).to_numpy()
            case _:
                raise InvalidTypeException()

    def to_tensor(self) -> torch.Tensor:
        match self.get_type():
            case TABULAR_DATA_TYPE.TENSOR:
                return cast(torch.Tensor, self.data)
            case TABULAR_DATA_TYPE.NUMPY:
                return torch.tensor(self.data)
            case TABULAR_DATA_TYPE.DATAFRAME:
                return cast(pl.DataFrame, self.data).to_torch().to(torch.float32)
            case _:
                raise InvalidTypeException()

    def to_dataframe(self) -> pl.DataFrame:
        match self.get_type():
            case TABULAR_DATA_TYPE.TENSOR:
                return pl.DataFrame(cast(torch.Tensor, self.data).detach().cpu().numpy())
            case TABULAR_DATA_TYPE.NUMPY:
                return pl.DataFrame(self.data)
            case TABULAR_DATA_TYPE.DATAFRAME:
                return cast(pl.DataFrame, self.data)
            case _:
                raise InvalidTypeException()
