from typing import Any, Sequence

from lib_ai.data.table_data import TableData
from lib_ai.transform.utils.transformer.transformable.transformable_models import (
    TransformableModel,
)

type TableTransformerModel = tuple[
    Sequence[str],
    TransformableModel[TableData, Any],
]


class TablePipelineModel(
    TransformableModel[
        TableData,
        None,
    ]
):
    transformers: Sequence[TableTransformerModel]
