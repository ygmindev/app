from lib_ai.data.tabular_data import TabularData
from lib_ai.transform.utils.transformer.base_transformer.base_transformer_models import (
    BaseTransformerModel,
)

type _StandardScalerTransformerDataModel = TabularData

type _StandardScalerTransformerFitModel = None


class _StandardScalerTransformerModel(
    BaseTransformerModel[
        _StandardScalerTransformerDataModel,
        _StandardScalerTransformerFitModel,
    ]
): ...
