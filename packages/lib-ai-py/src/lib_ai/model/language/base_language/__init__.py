from __future__ import annotations

from lib_ai.dataset.xy_dataset import XYDataset
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
    TDataset: XYDataset,
    TFit: BaseLanguageFitParamsModel,
    TEval: BaseLanguageEvalParamsModel,
    TPred: BaseLanguagePredParamsModel,
](
    BaseModel[
        TParams,
        TDataset,
        TFit,
        TEval,
        TPred,
    ],
    BaseLanguageModel[
        TParams,
        TDataset,
        TFit,
        TEval,
        TPred,
    ],
): ...
