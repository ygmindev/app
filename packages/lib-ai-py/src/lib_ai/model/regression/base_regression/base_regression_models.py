from lib_ai.data.base_data.base_data_models import BaseDataModel
from lib_ai.model.base_model.base_model_models import (
    BaseModelEvalParamsModel,
    BaseModelFitParamsModel,
    BaseModelModel,
    BaseModelParamsModel,
    BaseModelPredParamsModel,
)


class BaseRegressionParamsModel(BaseModelParamsModel): ...


class BaseRegressionEvalParamsModel(BaseModelEvalParamsModel): ...


class BaseRegressionFitParamsModel(BaseModelFitParamsModel): ...


class BaseRegressionPredParamsModel(BaseModelEvalParamsModel): ...


class BaseRegressionModel[
    TParams: BaseRegressionParamsModel,
    TFit: BaseModelFitParamsModel,
    TEval: BaseModelEvalParamsModel,
    TPred: BaseModelPredParamsModel,
    TX: BaseDataModel,
    TY: BaseDataModel | None,
](
    BaseModelModel[
        TParams,
        TFit,
        TEval,
        TPred,
        TX,
        TY,
    ]
): ...
