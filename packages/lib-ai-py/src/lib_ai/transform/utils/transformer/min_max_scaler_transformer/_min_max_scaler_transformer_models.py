from lib_ai.data.matrix_data import MatrixData
from lib_ai.data.tabular_data import TabularData
from lib_ai.transform.utils.transformer.base_transformer.base_transformer_models import (
    BaseTransformerModel,
)

type _MinMaxScalerTransformerDataModel = TabularData

type _MinMaxScalerTransformerFitModel = None


class _MinMaxScalerTransformerModel(
    BaseTransformerModel[
        _MinMaxScalerTransformerDataModel,
        _MinMaxScalerTransformerFitModel,
    ]
): ...
