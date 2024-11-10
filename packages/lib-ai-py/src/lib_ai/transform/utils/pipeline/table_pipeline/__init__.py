from lib_ai.transform.utils.pipeline.table_pipeline._table_pipeline import (
    _TablePipeline,
)
from lib_ai.transform.utils.pipeline.table_pipeline.table_pipeline_models import (
    TablePipelineModel,
)
from lib_ai.transform.utils.transformer.base_transformer import BaseTransformer


class TablePipeline(
    _TablePipeline,
    BaseTransformer,
    TablePipelineModel,
):
    pass
