from typing import Unpack

import polars as pl
from lib_ai.data.tabular_data import TabularData
from lib_ai.transform.utils.transformer.base_transformer import BaseTransformer
from lib_ai.transform.utils.transformer.label_encoder_transformer._label_encoder_transformer_models import (
    _LabelEncoderTransformerDataModel,
    _LabelEncoderTransformerFitModel,
    _LabelEncoderTransformerModel,
    _LabelEncoderTransformerParamsModel,
)
from lib_shared.core.utils.get_item import get_item
from sklearn.preprocessing import OrdinalEncoder


class _LabelEncoderTransformer(_LabelEncoderTransformerModel):
    def __init__(self, **params: Unpack[_LabelEncoderTransformerParamsModel]) -> None:
        labels = get_item(params, "labels", "auto")
        self._encoder = OrdinalEncoder(
            categories=labels,
            handle_unknown="error",
        )

    def fit(
        self,
        data: _LabelEncoderTransformerDataModel,
        _params: _LabelEncoderTransformerFitModel | None = None,
    ) -> None:
        self._encoder.fit(data.to_numpy())

    def transform(
        self,
        data: _LabelEncoderTransformerDataModel,
    ) -> _LabelEncoderTransformerDataModel:
        data = TabularData(
            data=pl.DataFrame(
                data=self._encoder.transform(data.to_numpy()),
                schema=data.columns,
            )
        )
        return data
