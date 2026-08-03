from typing import Self, Sequence

import polars as pl
from lib_shared.core.utils.base_model.base_model import BaseModel
from lib_shared.core.utils.private_field.private_field import PrivateField
from sklearn.base import BaseEstimator, TransformerMixin
from sklearn.compose import ColumnTransformer

from lib_ai.data.tabular_data import TabularData
from lib_ai.transform.utils.pipeline.table_pipeline.table_pipeline_models import (
    TablePipelineModel,
)
from lib_ai.transform.utils.transformer.transformable.transformable_models import (
    TransformableModel,
)


class _Transformer(
    TransformerMixin,
    BaseEstimator,
    BaseModel,
):
    transformer: TransformableModel[TabularData]
    _columns: Sequence[str] = PrivateField()

    def fit(
        self,
        x: pl.DataFrame,
        _y=None,
    ) -> Self:
        data = TabularData(x)
        if self.transformer.fit:
            self.transformer.fit(data)
        return self

    def transform(
        self,
        x: pl.DataFrame,
    ) -> pl.DataFrame:
        data = TabularData(x)
        data = self.transformer.transform(data)
        self._columns = data.columns
        return data.to_dataframe()

    def get_feature_names_out(self) -> Sequence[str]:
        return self._columns


class TablePipeline(TablePipelineModel):
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
        data: TabularData,
        params: None,
    ) -> None:
        self._transformer.fit(data.to_dataframe())

    def transform(
        self,
        data: TabularData,
        params: None,
    ) -> TabularData:
        return TabularData(data=self._transformer.transform(data.to_dataframe()))
