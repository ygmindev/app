from typing import Any, Callable, Mapping, Self, Sequence, Tuple, cast, overload

import numpy as np
import polars as pl
import torch
from lib_shared.core.constants import DATA_TYPE
from lib_shared.core.utils.invalid_type_exception import InvalidTypeException

from lib_ai.core.utils.get_device import get_device
from lib_ai.core.utils.get_numpy_type import get_numpy_type
from lib_ai.core.utils.get_tensor_type import get_tensor_type
from lib_ai.data.matrix_data import MatrixData
from lib_ai.data.tabular_data._tabular_data_models import (
    _TabularDataKeyModel,
    _TabularDataModel,
    _TabularDataStringKeyModel,
)
from lib_ai.data.tabular_data.tabular_data_constants import TabularDataType


class _TabularData(_TabularDataModel):
    @overload
    def __getitem__(self, key: _TabularDataStringKeyModel) -> MatrixData: ...

    @overload
    def __getitem__(self, key: _TabularDataKeyModel) -> Self: ...

    def __getitem__(
        self,
        key: _TabularDataStringKeyModel | _TabularDataKeyModel,
    ) -> MatrixData | Self:
        if isinstance(key, str):
            if isinstance(self.data, pl.DataFrame):
                return MatrixData(self.data[key].to_numpy())
            raise InvalidTypeException()
        return type(self)(data=self.data[cast(int | Sequence[int] | slice, key)])

    @property
    def columns(self) -> Sequence[str]:
        return self.data.columns

    def concat(self, other: Self) -> Self:
        result = self.data
        match self.get_type():
            case TabularDataType.DATAFRAME:
                result = pl.concat([cast(pl.DataFrame, result), other.to_dataframe()])
        return type(self)(data=result)

    def drop_columns(self, columns: Sequence[str]) -> Self:
        match self.get_type():
            case TabularDataType.DATAFRAME:
                result = self.to_dataframe().drop(columns)
        return type(self)(data=result)

    def drop_na(self) -> Self:
        match self.get_type():
            case TabularDataType.DATAFRAME:
                result = self.to_dataframe().drop_nulls()
        return type(self)(data=result)

    def equals(self, other: Self) -> bool:
        match self.get_type():
            case TabularDataType.DATAFRAME:
                return self.to_dataframe().equals(other.to_dataframe())
        raise InvalidTypeException()

    @classmethod
    def from_csv(
        cls,
        pathname: str,
        to: TabularDataType = TabularDataType.DATAFRAME,
    ) -> Self:
        result = None
        match to:
            case TabularDataType.DATAFRAME:
                result = pl.read_csv(
                    pathname,
                    null_values=["NA"],
                )
        if result is None:
            raise InvalidTypeException()
        return cls(data=result)

    @classmethod
    def from_dict(
        cls,
        data: Mapping[str, Sequence[Any]],
        to: TabularDataType = TabularDataType.DATAFRAME,
    ) -> Self:
        result = None
        match to:
            case TabularDataType.DATAFRAME:
                result = pl.DataFrame(data)
        if result is None:
            raise InvalidTypeException()
        return cls(data=result)

    def get_type(self) -> TabularDataType:
        if isinstance(self.data, pl.DataFrame):
            return TabularDataType.DATAFRAME
        raise InvalidTypeException()

    def head(self, n_rows: int = 1) -> Self:
        result = self.data
        match self.get_type():
            case TabularDataType.DATAFRAME:
                result = self.to_dataframe().head(n_rows)
        return type(self)(data=result)

    def map(
        self,
        column: str,
        func: Callable[[Any], Any],
    ) -> Self:
        result = self.data
        match self.get_type():
            case TabularDataType.DATAFRAME:
                result = self.to_dataframe().with_columns(
                    pl.struct(pl.all()).map_elements(func).alias(column)
                )
        return type(self)(data=result)

    @property
    def shape(self) -> Tuple[int, ...]:
        match self.get_type():
            case TabularDataType.DATAFRAME:
                return self.to_dataframe().shape
            case _:
                raise InvalidTypeException()

    def to_numpy(
        self,
        dtype: DATA_TYPE | None = DATA_TYPE.FLOAT,
    ) -> np.ndarray:
        to_type = get_numpy_type(dtype)
        match self.get_type():
            case TabularDataType.DATAFRAME:
                # return cast(pl.DataFrame, self.data).to_numpy().astype(to_type)
                return cast(pl.DataFrame, self.data).to_numpy()
            case _:
                raise InvalidTypeException()

    def to_tensor(
        self,
        dtype: DATA_TYPE | None = DATA_TYPE.FLOAT,
    ) -> torch.Tensor:
        to_type = get_tensor_type(dtype)
        match self.get_type():
            case TabularDataType.DATAFRAME:
                device = get_device()
                return cast(pl.DataFrame, self.data).to_torch().to(to_type).to(device)
            case _:
                raise InvalidTypeException()

    def to_dataframe(self) -> pl.DataFrame:
        match self.get_type():
            case TabularDataType.DATAFRAME:
                return cast(pl.DataFrame, self.data)
            case _:
                raise InvalidTypeException()

    def to_matrix(self) -> MatrixData:
        match self.get_type():
            case TabularDataType.DATAFRAME:
                data = cast(pl.DataFrame, self.data)
                device = get_device()
                return MatrixData(
                    pl.select(v.cast(pl.Float32, strict=False) for v in data)
                    .to_torch()
                    .to(device)
                )
            case _:
                raise InvalidTypeException()
                raise InvalidTypeException()
                raise InvalidTypeException()
