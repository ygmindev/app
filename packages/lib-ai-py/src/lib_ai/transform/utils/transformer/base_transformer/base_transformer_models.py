from lib_ai.dataset.base_dataset.base_dataset_models import BaseDatasetModel
from lib_ai.transform.utils.pipeline.base_pipeline.base_pipeline_models import (
    BasePipelineModel,
)


class BaseTransformerModel[T: BaseDatasetModel](BasePipelineModel[T]):
    pass
