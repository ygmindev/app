from lib_ai.data.table_data import TableData
from lib_ai.transform.utils.transformer.transformable.transformable_models import (
    TransformableModel,
)


class _OneHotTransformerModel(
    TransformableModel[
        TableData,
        None,
    ]
):
    is_drop_first: bool = False


class OneHotTransformerModel(_OneHotTransformerModel): ...
