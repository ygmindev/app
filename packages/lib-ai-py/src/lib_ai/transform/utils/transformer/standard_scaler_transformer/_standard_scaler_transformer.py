import polars as pl
from lib_ai.transform.utils.transformer.standard_scaler_transformer._standard_scaler_transformer_models import (
    _StandardScalerTransformerDataModel,
    _StandardScalerTransformerModel,
)


class _StandardScalerTransformer(_StandardScalerTransformerModel):
    def transform(
        self,
        data: _StandardScalerTransformerDataModel,
    ) -> _StandardScalerTransformerDataModel:
        data.data = data.to_dataframe().select((pl.all() - pl.all().mean()) / pl.all().std())
        return data
