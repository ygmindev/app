from abc import abstractmethod
from typing import Any, Sequence, Tuple

from lib_ai.data.tabular_data import TabularData
from lib_ai.transform.utils.pipeline.base_pipeline.base_pipeline_models import (
    BasePipelineModel,
)
from lib_ai.transform.utils.transformer.base_transformer.base_transformer_models import (
    BaseTransformerModel,
)

type _TablePipelineTransformerModel = Tuple[
    Sequence[str],
    BaseTransformerModel[TabularData, Any],
]


class _TablePipelineModel(BasePipelineModel[TabularData]):
    @abstractmethod
    def __init__(
        self,
        transformers: Sequence[_TablePipelineTransformerModel],
    ) -> None: ...
