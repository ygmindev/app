from abc import abstractmethod
from typing import Any, Self, Sequence

import polars as pl
from lib_ai.data.base_data.base_data_models import BaseDataModel


class _ArrayDataModel(BaseDataModel):
    @abstractmethod
    def __init__(self, data: Sequence | pl.Series | None = None) -> None: ...

    @property
    def data(self) -> pl.Series: ...

    @data.setter
    def data(self, value: pl.Series) -> None: ...

    @classmethod
    def from_list(cls, _data: Sequence[Any]) -> Self: ...
