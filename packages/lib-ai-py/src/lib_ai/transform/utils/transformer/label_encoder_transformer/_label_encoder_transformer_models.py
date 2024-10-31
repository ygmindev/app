from typing import NotRequired, Sequence, TypedDict

from lib_ai.data.array_data import ArrayData
from lib_ai.data.tabular_data import TabularData
from lib_ai.dataset.xy_dataset.xy_dataset_models import XYDatasetModel
from lib_ai.transform.utils.transformer.base_transformer.base_transformer_models import (
    BaseTransformerModel,
)

type _LabelEncoderTransformerDatasetModel = XYDatasetModel[TabularData, ArrayData]

type _LabelEncoderTransformerFitModel = None


class _LabelEncoderTransformerParamsModel(TypedDict):
    labels: NotRequired[Sequence[Sequence[str]]]


class _LabelEncoderTransformerModel(
    BaseTransformerModel[_LabelEncoderTransformerDatasetModel, _LabelEncoderTransformerFitModel]
): ...
