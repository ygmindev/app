from lib_ai.dataset.xy_dataset import XYDataset
from lib_ai.model.base_model.base_model_models import (
    BaseModelEvalParamsModel,
    BaseModelFitParamsModel,
    BaseModelModel,
    BaseModelParamsModel,
    BaseModelPredictParamsModel,
)


class BaseRegressionParamsModel(BaseModelParamsModel): ...


class BaseRegressionEvalParamsModel(BaseModelEvalParamsModel): ...


class BaseRegressionFitParamsModel(BaseModelFitParamsModel): ...


class BaseRegressionPredictParamsModel(BaseModelEvalParamsModel): ...


class BaseRegressionModel[
    TParams: BaseRegressionParamsModel,
    TDataset: XYDataset,
    TFit: BaseModelFitParamsModel,
    TEval: BaseModelEvalParamsModel,
    TPred: BaseModelPredictParamsModel,
](
    BaseModelModel[
        TParams,
        TDataset,
        TFit,
        TEval,
        TPred,
    ]
): ...
