from typing import NotRequired, Sequence, TypedDict

from lib_ai.data.matrix_data import MatrixData
from lib_ai.data.tabular_data import TabularData
from lib_ai.transform.utils.transformer.base_transformer.base_transformer_models import (
    BaseTransformerModel,
)

type _LabelEncoderTransformerDataModel = TabularData

type _LabelEncoderTransformerFitModel = None


class _LabelEncoderTransformerParamsModel(TypedDict):
    labels: NotRequired[Sequence[Sequence[str]]]


class _LabelEncoderTransformerModel(
    BaseTransformerModel[
        _LabelEncoderTransformerDataModel,
        _LabelEncoderTransformerFitModel,
    ]
): ...
