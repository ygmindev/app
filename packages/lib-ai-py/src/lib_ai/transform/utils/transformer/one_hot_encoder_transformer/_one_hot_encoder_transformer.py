from typing import Unpack

from lib_ai.transform.utils.transformer.one_hot_encoder_transformer._one_hot_encoder_transformer_models import (
    _OneHotEncoderTransformerDataModel,
    _OneHotEncoderTransformerModel,
    _OneHotEncoderTransformerParamsModel,
)
from lib_shared.core.utils.get_item import get_item


class _OneHotEncoderTransformer(_OneHotEncoderTransformerModel):
    def __init__(self, **params: Unpack[_OneHotEncoderTransformerParamsModel]) -> None:
        self._is_sparse = get_item(params, "is_sparse", False)

    def transform(
        self,
        data: _OneHotEncoderTransformerDataModel,
    ) -> _OneHotEncoderTransformerDataModel:
        data.data = data.to_dataframe().to_dummies(drop_first=self._is_sparse)
        return data
