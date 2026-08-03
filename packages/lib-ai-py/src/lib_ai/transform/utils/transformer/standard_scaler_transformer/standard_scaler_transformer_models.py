from lib_ai.data.tabular_data import TabularData
from lib_ai.transform.utils.transformer.transformable.transformable_models import (
    TransformableModel,
)


class _StandardScalerTransformerModel(
    TransformableModel[
        TabularData,
        None,
    ]
): ...


class StandardScalerTransformerModel(_StandardScalerTransformerModel): ...
