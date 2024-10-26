from abc import abstractmethod
from typing import Any, Mapping, Self, Sequence, Tuple, overload

import polars as pl
from lib_ai.data.array_data.array_data_models import ArrayDataModel
from lib_ai.data.base_data.base_data_models import BaseDataModel
from lib_ai.data.tabular_data.tabular_data_constants import TABULAR_DATA_TYPE
from numpy.typing import NDArray

type _TabularDataTypeModel = NDArray | pl.DataFrame

type _TabularDataStringKeyModel = str

type _TabularDataIndexKeyModel = int

type _TabularDataMultiKeyModel = Sequence[int] | slice

type _TabularDataKeyModel = _TabularDataIndexKeyModel | _TabularDataMultiKeyModel | Tuple[
    _TabularDataIndexKeyModel, str
] | Tuple[_TabularDataMultiKeyModel, Sequence[str]]


class _TabularDataModel(BaseDataModel[_TabularDataTypeModel]):
    @overload
    @abstractmethod
    def __getitem__(self, key: _TabularDataStringKeyModel) -> ArrayDataModel: ...

    @overload
    @abstractmethod
    def __getitem__(self, key: _TabularDataKeyModel) -> Self: ...

    @classmethod
    @abstractmethod
    def from_dict(
        cls,
        _data: Mapping[str, Sequence[Any]],
        _to: TABULAR_DATA_TYPE | None = TABULAR_DATA_TYPE.DATAFRAME,
    ) -> Self: ...

    @abstractmethod
    def get_type(self) -> TABULAR_DATA_TYPE: ...

    @abstractmethod
    def to_dataframe(self) -> pl.DataFrame: ...

    @property
    @abstractmethod
    def shape(self) -> Tuple[int, ...]: ...
