from typing import NotRequired, TypedDict

from lib_ai.data.array_data import ArrayData
from lib_ai.data.tabular_data import TabularData
from lib_ai.dataset.xy_dataset.xy_dataset_models import XYDatasetModel
from lib_ai.transform.utils.transformer.base_transformer.base_transformer_models import (
    BaseTransformerModel,
)

type _OneHotEncoderTransformerDatasetModel = XYDatasetModel[TabularData, ArrayData]

type _OneHotEncoderTransformerFitModel = None


class _OneHotEncoderTransformerParamsModel(TypedDict):
    is_sparse: NotRequired[bool]


class _OneHotEncoderTransformerModel(
    BaseTransformerModel[_OneHotEncoderTransformerDatasetModel, _OneHotEncoderTransformerFitModel]
): ...
