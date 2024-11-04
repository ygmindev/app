from lib_ai.dataset.base_dataset.base_dataset_models import BaseDatasetModel
from lib_ai.model.base_model.base_model_models import BaseModelModel


class BaseModel[TDataset: BaseDatasetModel, TFit, TEval, TScore](
    BaseModelModel[TDataset, TFit, TEval, TScore]
):
    pass
