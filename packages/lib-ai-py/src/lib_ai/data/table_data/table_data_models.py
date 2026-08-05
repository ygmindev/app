from typing import Any, Callable, Mapping, Self, Sequence

import polars as pl

from lib_ai.data.base_data.base_data_models import BaseDataModel
from lib_ai.data.matrix_data import MatrixData
from lib_ai.data.table_data.constants import TableDataType

type TableDataStringKeyModel = str

type TableDataIndexKeyModel = int

type TableDataMultiKeyModel = Sequence[int] | slice

type TableDataKeyModel = (
    TableDataIndexKeyModel
    | TableDataMultiKeyModel
    | tuple[TableDataIndexKeyModel, str]
    | tuple[TableDataMultiKeyModel, Sequence[str]]
)


class _TableDataModel(BaseDataModel[pl.DataFrame]):
    def __getitem__(
        self,
        key: TableDataStringKeyModel | TableDataKeyModel,
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
        _to: TableDataType | None = TableDataType.DATAFRAME,
    ) -> Self: ...

    @classmethod
    def from_dict(
        cls,
        data: Mapping[str, Sequence[Any]],
        to: TableDataType | None = TableDataType.DATAFRAME,
    ) -> Self: ...

    @property
    def data_type(self) -> TableDataType: ...

    def map(
        self,
        column: str,
        func: Callable[[Any], Any],
    ) -> Self: ...

    def to_dataframe(self) -> pl.DataFrame: ...

    def to_matrix(self) -> MatrixData: ...


class TableDataModel(_TableDataModel): ...
