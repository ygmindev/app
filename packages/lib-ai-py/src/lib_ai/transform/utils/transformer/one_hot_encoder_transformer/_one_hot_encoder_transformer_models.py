from lib_ai.data.array_data import ArrayData
from lib_ai.data.array_data.array_data_models import ArrayDataModel
from lib_ai.data.base_data.base_data_models import BaseDataModel
from lib_ai.data.tabular_data import TabularData
from lib_ai.data.tabular_data.tabular_data_models import TabularDataModel
from lib_ai.dataset.xy_dataset.xy_dataset_models import XYDatasetModel
from lib_ai.transform.utils.transformer.base_transformer.base_transformer_models import (
    BaseTransformerModel,
)

type _OneHotEncoderTransformerDatasetModel = XYDatasetModel[TabularData, ArrayData]


class _OneHotEncoderTransformerModel(
    BaseTransformerModel[_OneHotEncoderTransformerDatasetModel, None]
): ...
