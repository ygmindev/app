from abc import abstractmethod
from typing import Any, Mapping, Self, Sequence, Tuple, overload

import polars as pl
from lib_ai.data.array_data.array_data_models import ArrayDataModel
from lib_ai.data.base_data.base_data_models import BaseDataModel

type _TabularDataStringKeyModel = str

type _TabularDataIndexKeyModel = int

type _TabularDataMultiKeyModel = Sequence[int] | slice

type _TabularDataKeyModel = _TabularDataIndexKeyModel | _TabularDataMultiKeyModel | Tuple[
    _TabularDataIndexKeyModel, str
] | Tuple[_TabularDataMultiKeyModel, Sequence[str]]


class _TabularDataModel(BaseDataModel):
    @abstractmethod
    def __init__(self, data: pl.DataFrame | None = None) -> None: ...

    @overload
    @abstractmethod
    def __getitem__(self, key: _TabularDataStringKeyModel) -> ArrayDataModel: ...

    @overload
    @abstractmethod
    def __getitem__(self, key: _TabularDataKeyModel) -> Self: ...

    @classmethod
    @abstractmethod
    def from_dict(cls, _data: Mapping[str, Sequence[Any]]) -> Self: ...

    @property
    @abstractmethod
    def shape(self) -> Tuple[int, int]: ...
