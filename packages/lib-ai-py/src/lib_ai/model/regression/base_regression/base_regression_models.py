from typing import NotRequired, Sequence

from lib_ai.dataset.xy_dataset import XYDataset
from lib_ai.model.base_model.base_model_models import (
    BaseModelEvalParamsModel,
    BaseModelFitParamsModel,
    BaseModelModel,
    BaseModelParamsModel,
)
from lib_ai.scoring.utils.scorer.scorer_models import ScorerCallableModel


class BaseRegressionParamsModel(BaseModelParamsModel): ...


class BaseRegressionEvalParamsModel(BaseModelEvalParamsModel): ...


class BaseRegressionFitParamsModel(BaseModelFitParamsModel): ...


class BaseRegressionModel[
    TParams: BaseRegressionParamsModel,
    TDataset: XYDataset,
    TFit: BaseModelFitParamsModel,
    TEval: BaseModelEvalParamsModel,
](
    BaseModelModel[
        TParams,
        TDataset,
        TFit,
        TEval,
    ]
): ...
