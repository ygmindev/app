from __future__ import annotations

from lib_ai.data.base_data.base_data_models import BaseDataModel
from lib_ai.model.base_model.base_model_models import (
    BaseModelEvalParamsModel,
    BaseModelFitParamsModel,
    BaseModelModel,
    BaseModelParamsModel,
    BaseModelPredParamsModel,
)


class BaseLanguageParamsModel(BaseModelParamsModel): ...


class BaseLanguageEvalParamsModel(BaseModelEvalParamsModel): ...


class BaseLanguageFitParamsModel(BaseModelFitParamsModel): ...


class BaseLanguagePredParamsModel(BaseModelPredParamsModel): ...


class BaseLanguageModel[
    TParams: BaseLanguageParamsModel,
    TFit: BaseLanguageFitParamsModel,
    TEval: BaseLanguageEvalParamsModel,
    TPred: BaseLanguagePredParamsModel,
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
