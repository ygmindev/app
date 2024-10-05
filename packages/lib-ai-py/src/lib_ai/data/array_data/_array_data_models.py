from abc import abstractmethod
from typing import Any, Self, Sequence, overload

import polars as pl
from lib_ai.data.base_data.base_data_models import BaseDataModel

type _ArrayDataSingleKeyModel = int

type _ArrayDataMultiKeyModel = Sequence[int] | slice


class _ArrayDataModel(BaseDataModel):
    @abstractmethod
    def __init__(self, data: pl.Series | None = None) -> None: ...

    @overload
    @abstractmethod
    def __getitem__(self, _key: _ArrayDataSingleKeyModel) -> Self: ...

    @overload
    @abstractmethod
    def __getitem__(self, _key: _ArrayDataMultiKeyModel) -> Any: ...

    @abstractmethod
    def __len__(self) -> int: ...

    @property
    def data(self) -> pl.Series: ...

    @data.setter
    def data(self, value: pl.Series) -> None: ...

    @classmethod
    def from_list(cls, _data: Sequence[Any]) -> Self: ...
