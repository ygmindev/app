import polars as pl

from lib_ai.data.table_data.table_data import TableData
from lib_ai.transform.utils.transformer.min_max_scaler_transformer.min_max_scaler_transformer_models import (
    MinMaxScalerTransformerModel,
    _MinMaxScalerTransformerModel,
)


class _MinMaxScalerTransformer(_MinMaxScalerTransformerModel):
    def transform(
        self,
        data: TableData,
    ) -> TableData:
        data.data = data.to_dataframe().select(
            (pl.all() - pl.all().min()) / (pl.all().max() - pl.all().min())
        )
        return data


class MinMaxScalerTransformer(
    _MinMaxScalerTransformer,
    MinMaxScalerTransformerModel,
): ...
