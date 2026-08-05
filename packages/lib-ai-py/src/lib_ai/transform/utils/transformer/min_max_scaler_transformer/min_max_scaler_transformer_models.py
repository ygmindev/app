from lib_ai.data.table_data import TableData
from lib_ai.transform.utils.transformer.transformable.transformable_models import (
    TransformableModel,
)


class _MinMaxScalerTransformerModel(
    TransformableModel[
        TableData,
        None,
    ]
): ...


class MinMaxScalerTransformerModel(_MinMaxScalerTransformerModel): ...
