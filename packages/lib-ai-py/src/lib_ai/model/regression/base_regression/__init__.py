from lib_ai.dataset.base_dataset.base_dataset_models import BaseDatasetModel
from lib_ai.model.regression.base_regression.base_regression_models import (
    BaseRegressionModel,
)


class BaseRegression[TDataset: BaseDatasetModel, TFit, TEval](
    BaseRegressionModel[TDataset, TFit, TEval]
):
    pass
