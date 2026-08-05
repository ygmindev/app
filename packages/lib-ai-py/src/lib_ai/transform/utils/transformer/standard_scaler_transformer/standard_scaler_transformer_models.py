from lib_ai.data.table_data import TableData
from lib_ai.transform.utils.transformer.transformable.transformable_models import (
    TransformableModel,
)


class _StandardScalerTransformerModel(
    TransformableModel[
        TableData,
        None,
    ]
): ...


class StandardScalerTransformerModel(_StandardScalerTransformerModel): ...
