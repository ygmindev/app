from __future__ import annotations

from lib_ai.data.base_data.base_data_models import BaseDataModel
from lib_ai.model.base_model import BaseModel
from lib_ai.model.language.base_language.base_language_models import (
    BaseLanguageEvalParamsModel,
    BaseLanguageFitParamsModel,
    BaseLanguageModel,
    BaseLanguageParamsModel,
    BaseLanguagePredParamsModel,
)


class BaseLanguage[
    TParams: BaseLanguageParamsModel,
    TFit: BaseLanguageFitParamsModel,
    TEval: BaseLanguageEvalParamsModel,
    TPred: BaseLanguagePredParamsModel,
    TX: BaseDataModel,
    TY: BaseDataModel | None,
](
    BaseModel[
        TParams,
        TFit,
        TEval,
        TPred,
        TX,
        TY,
    ],
    BaseLanguageModel[
        TParams,
        TFit,
        TEval,
        TPred,
        TX,
        TY,
    ],
): ...
