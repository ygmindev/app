import polars as pl

from lib_ai.data.table_data.table_data import TableData
from lib_ai.transform.utils.transformer.standard_scaler_transformer.standard_scaler_transformer_models import (
    StandardScalerTransformerModel,
    _StandardScalerTransformerModel,
)


class _StandardScalerTransformer(_StandardScalerTransformerModel):
    def transform(
        self,
        data: TableData,
    ) -> TableData:
        data.data = data.to_dataframe().select(
            (pl.all() - pl.all().mean()) / pl.all().std()
        )
        return data


class StandardScalerTransformer(
    _StandardScalerTransformer,
    StandardScalerTransformerModel,
): ...
