from typing import Self, Sequence

import polars as pl
from lib_ai.data.tabular_data import TabularData
from lib_ai.transform.utils.pipeline.table_pipeline._table_pipeline_models import (
    _TablePipelineModel,
    _TablePipelineTransformerModel,
)
from lib_ai.transform.utils.transformer.base_transformer.base_transformer_models import (
    BaseTransformerModel,
)
from sklearn.base import BaseEstimator, TransformerMixin
from sklearn.compose import ColumnTransformer


class _Transformer(TransformerMixin, BaseEstimator):
    _columns: Sequence[str]

    def __init__(
        self,
        transformer: BaseTransformerModel,
    ) -> None:
        super().__init__()
        self.transformer = transformer

    def fit(
        self,
        X: pl.DataFrame,
        _y=None,
    ) -> Self:
        data = TabularData(X)
        if self.transformer.fit:
            self.transformer.fit(data)
        return self

    def transform(
        self,
        X: pl.DataFrame,
    ) -> pl.DataFrame:
        data = TabularData(X)
        data = self.transformer.transform(data)
        self._columns = data.columns
        return data.to_dataframe()

    def get_feature_names_out(self) -> Sequence[str]:
        return self._columns


class _TablePipeline(_TablePipelineModel):
    def __init__(
        self,
        transformers: Sequence[_TablePipelineTransformerModel],
    ) -> None:
        self._transformer = ColumnTransformer(
            list(
                (" ".join(columns), _Transformer(transformer), columns)
                for (columns, transformer) in transformers
            ),
            remainder="passthrough",
            verbose_feature_names_out=False,
        )
        self._transformer.set_output(transform="polars")

    def fit(
        self,
        data: TabularData,
        _params: None,
    ) -> None:
        self._transformer.fit(data.to_dataframe())

    def transform(
        self,
        data: TabularData,
    ) -> TabularData:
        return TabularData(data=self._transformer.transform(data.to_dataframe()))
