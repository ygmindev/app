from typing import NotRequired, TypedDict

from lib_ai.data.tabular_data import TabularData
from lib_ai.transform.utils.transformer.base_transformer.base_transformer_models import (
    BaseTransformerModel,
)

type _OneHotEncoderTransformerDataModel = TabularData

type _OneHotEncoderTransformerFitModel = None


class _OneHotEncoderTransformerParamsModel(TypedDict, total=False):
    is_sparse: NotRequired[bool]


class _OneHotEncoderTransformerModel(
    BaseTransformerModel[
        _OneHotEncoderTransformerDataModel,
        _OneHotEncoderTransformerFitModel,
    ]
): ...
