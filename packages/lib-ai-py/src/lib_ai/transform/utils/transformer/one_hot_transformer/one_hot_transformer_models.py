from lib_ai.data.tabular_data import TabularData
from lib_ai.transform.utils.transformer.transformable.transformable_models import (
    TransformableModel,
)


class _OneHotTransformerModel(
    TransformableModel[
        TabularData,
        None,
    ]
):
    is_drop_first: bool = False


class OneHotTransformerModel(_OneHotTransformerModel): ...
