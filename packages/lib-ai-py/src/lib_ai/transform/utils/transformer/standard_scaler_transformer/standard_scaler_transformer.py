import polars as pl

from lib_ai.data.tabular_data.tabular_data import TabularData
from lib_ai.transform.utils.transformer.standard_scaler_transformer.standard_scaler_transformer_models import (
    StandardScalerTransformerModel,
    _StandardScalerTransformerModel,
)


class _StandardScalerTransformer(_StandardScalerTransformerModel):
    def transform(
        self,
        data: TabularData,
    ) -> TabularData:
        data.data = data.to_dataframe().select(
            (pl.all() - pl.all().mean()) / pl.all().std()
        )
        return data


class StandardScalerTransformer(
    _StandardScalerTransformer,
    StandardScalerTransformerModel,
): ...
