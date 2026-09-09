from typing import Any, Self, Sequence

import polars as pl
from lib_shared.core.utils.base_model.base_model import BaseModel
from lib_shared.core.utils.private_field.private_field import PrivateField
from sklearn.base import BaseEstimator, TransformerMixin
from sklearn.compose import ColumnTransformer

from lib_ai.data.table_data.table_data import TableData
from lib_ai.transform.utils.transformer.transformable.transformable import Transformable

type TableTransformer = tuple[
    Sequence[str],
    Transformable[TableData, Any],
]


class _Transformer(
    TransformerMixin,
    BaseEstimator,
    BaseModel,
):
    transformer: Transformable[TableData, Any]
    _columns: list[str] = PrivateField(default_factory=list)

    def fit(
        self,
        x: pl.DataFrame,
        _y=None,
    ) -> Self:
        data = TableData(data=x)
        if self.transformer.fit:
            self.transformer.fit(data)
        return self

    def transform(
        self,
        x: pl.DataFrame,
    ) -> pl.DataFrame:
        data = TableData(data=x)
        data = self.transformer.transform(data)
        self._columns = data.columns
        return data.to_dataframe()

    def get_feature_names_out(self) -> Sequence[str]:
        return self._columns


class TablePipeline(BaseModel):
    transformers: list[TableTransformer]

    _transformer: ColumnTransformer = PrivateField()

    def post_init(
        self,
    ) -> None:
        self._transformer = ColumnTransformer(
            list(
                (" ".join(columns), _Transformer(transformer=transformer), columns)
                for (columns, transformer) in self.transformers
            ),
            remainder="passthrough",
            verbose_feature_names_out=False,
        )
        self._transformer.set_output(transform="polars")

    def fit(
        self,
        data: TableData,
        params: None = None,
    ) -> None:
        self._transformer.fit(data.to_dataframe().to_pandas())

    def transform(
        self,
        data: TableData,
        params: None = None,
    ) -> TableData:
        return TableData(
            data=self._transformer.transform(data.to_dataframe().to_pandas())
        )
