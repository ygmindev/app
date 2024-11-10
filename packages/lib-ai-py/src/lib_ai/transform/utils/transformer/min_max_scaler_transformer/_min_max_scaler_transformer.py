import polars as pl
from lib_ai.transform.utils.transformer.min_max_scaler_transformer._min_max_scaler_transformer_models import (
    _MinMaxScalerTransformerDataModel,
    _MinMaxScalerTransformerModel,
)


class _MinMaxScalerTransformer(_MinMaxScalerTransformerModel):
    def transform(
        self,
        data: _MinMaxScalerTransformerDataModel,
    ) -> _MinMaxScalerTransformerDataModel:
        data.data = data.to_dataframe().select(
            (pl.all() - pl.all().min()) / (pl.all().max() - pl.all().min())
        )
        return data
