from lib_ai.dataset.base_dataset.base_dataset_models import BaseDatasetModel
from lib_ai.model.classification.base_classification.base_classification_models import (
    BaseClassificationModel,
)


class BaseClassification[TDataset: BaseDatasetModel, TFit, TEval](
    BaseClassificationModel[TDataset, TFit, TEval]
): ...
