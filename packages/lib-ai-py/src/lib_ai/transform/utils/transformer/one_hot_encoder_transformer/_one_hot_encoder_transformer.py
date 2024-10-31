from typing import Unpack

from lib_ai.transform.utils.transformer.one_hot_encoder_transformer._one_hot_encoder_transformer_models import (
    _OneHotEncoderTransformerDatasetModel,
    _OneHotEncoderTransformerModel,
    _OneHotEncoderTransformerParamsModel,
)


class _OneHotEncoderTransformer(_OneHotEncoderTransformerModel):
    def __init__(self, **params: Unpack[_OneHotEncoderTransformerParamsModel]) -> None:
        self._is_sparse = params.get("is_sparse", False)

    def transform(
        self,
        dataset: _OneHotEncoderTransformerDatasetModel,
    ) -> _OneHotEncoderTransformerDatasetModel:
        dataset.x.data = dataset.x.to_dataframe().to_dummies(drop_first=self._is_sparse)
        return dataset
