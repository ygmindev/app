from typing import Any, Callable, Mapping, Self, Sequence

import polars as pl

from lib_ai.data.base_data.base_data_models import BaseDataModel
from lib_ai.data.matrix_data import MatrixData
from lib_ai.data.tabular_data.constants import TabularDataType

type TabularDataStringKeyModel = str

type TabularDataIndexKeyModel = int

type TabularDataMultiKeyModel = Sequence[int] | slice

type TabularDataKeyModel = (
    TabularDataIndexKeyModel
    | TabularDataMultiKeyModel
    | tuple[TabularDataIndexKeyModel, str]
    | tuple[TabularDataMultiKeyModel, Sequence[str]]
)


class _TabularDataModel(BaseDataModel[pl.DataFrame]):
    def __getitem__(
        self,
        key: TabularDataStringKeyModel | TabularDataKeyModel,
    ) -> MatrixData | Self: ...

    @property
    def columns(self) -> list[str]: ...

    def drop_columns(
        self,
        columns: Sequence[str],
    ) -> Self: ...

    def drop_na(self) -> Self: ...

    @classmethod
    def from_csv(
        cls,
        pathname: str,
        _to: TabularDataType | None = TabularDataType.DATAFRAME,
    ) -> Self: ...

    @classmethod
    def from_dict(
        cls,
        data: Mapping[str, Sequence[Any]],
        to: TabularDataType | None = TabularDataType.DATAFRAME,
    ) -> Self: ...

    @property
    def data_type(self) -> TabularDataType: ...

    def map(
        self,
        column: str,
        func: Callable[[Any], Any],
    ) -> Self: ...

    def to_dataframe(self) -> pl.DataFrame: ...

    def to_matrix(self) -> MatrixData: ...


class TabularDataModel(_TabularDataModel): ...
