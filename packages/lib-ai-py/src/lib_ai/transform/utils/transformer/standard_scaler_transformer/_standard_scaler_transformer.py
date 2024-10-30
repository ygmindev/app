import polars as pl
from lib_ai.transform.utils.transformer.standard_scaler_transformer._standard_scaler_transformer_models import (
    _StandardScalerTransformerDatasetModel,
    _StandardScalerTransformerModel,
)


class _StandardScalerTransformer(_StandardScalerTransformerModel):
    def transform(
        self,
        dataset: _StandardScalerTransformerDatasetModel,
    ) -> _StandardScalerTransformerDatasetModel:
        dataset.x.data = dataset.x.to_dataframe().select(
            (pl.all() - pl.all().mean()) / pl.all().std()
        )
        return dataset
