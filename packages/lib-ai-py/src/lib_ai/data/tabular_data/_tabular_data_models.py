from abc import abstractmethod
from typing import Any, Mapping, Self, Sequence, Tuple, overload

import polars as pl
from lib_ai.data.base_data.base_data_models import BaseDataModel
from lib_ai.data.matrix_data import MatrixData
from lib_ai.data.tabular_data.tabular_data_constants import TabularDataType

type _TabularDataTypeModel = pl.DataFrame

type _TabularDataStringKeyModel = str

type _TabularDataIndexKeyModel = int

type _TabularDataMultiKeyModel = Sequence[int] | slice

type _TabularDataKeyModel = _TabularDataIndexKeyModel | _TabularDataMultiKeyModel | Tuple[
    _TabularDataIndexKeyModel, str
] | Tuple[_TabularDataMultiKeyModel, Sequence[str]]


class _TabularDataModel(BaseDataModel[_TabularDataTypeModel]):
    @overload
    @abstractmethod
    def __getitem__(self, key: _TabularDataStringKeyModel) -> MatrixData: ...

    @overload
    @abstractmethod
    def __getitem__(self, key: _TabularDataKeyModel) -> Self: ...

    @property
    @abstractmethod
    def columns(self) -> Sequence[str]: ...

    @abstractmethod
    def drop_columns(self, columns: Sequence[str]) -> Self: ...

    @abstractmethod
    def drop_na(self) -> Self: ...

    @classmethod
    @abstractmethod
    def from_csv(
        cls,
        pathname: str,
        _to: TabularDataType | None = TabularDataType.DATAFRAME,
    ) -> Self: ...

    @classmethod
    @abstractmethod
    def from_dict(
        cls,
        _data: Mapping[str, Sequence[Any]],
        _to: TabularDataType | None = TabularDataType.DATAFRAME,
    ) -> Self: ...

    @abstractmethod
    def get_type(self) -> TabularDataType: ...

    @abstractmethod
    def to_dataframe(self) -> pl.DataFrame: ...

    @abstractmethod
    def to_matrix(self) -> MatrixData: ...
