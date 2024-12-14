from __future__ import annotations

from lib_ai.dataset.xy_dataset import XYDataset
from lib_ai.model.base_model.base_model_models import (
    BaseModelEvalParamsModel,
    BaseModelFitParamsModel,
    BaseModelModel,
    BaseModelParamsModel,
    BaseModelPredictParamsModel,
)


class BaseLanguageParamsModel(BaseModelParamsModel): ...


class BaseLanguageEvalParamsModel(BaseModelEvalParamsModel): ...


class BaseLanguageFitParamsModel(BaseModelFitParamsModel): ...


class BaseLanguagePredictParamsModel(BaseModelPredictParamsModel): ...


class BaseLanguageModel[
    TParams: BaseLanguageParamsModel,
    TDataset: XYDataset,
    TFit: BaseLanguageFitParamsModel,
    TEval: BaseLanguageEvalParamsModel,
    TPred: BaseLanguagePredictParamsModel,
](
    BaseModelModel[
        TParams,
        TDataset,
        TFit,
        TEval,
        TPred,
    ]
): ...


# TODO: https://github.com/pylint-dev/pylint/issues/9335
