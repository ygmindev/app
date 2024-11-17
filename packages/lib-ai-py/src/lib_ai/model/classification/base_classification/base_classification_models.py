from __future__ import annotations

from abc import abstractmethod
from typing import NotRequired

from lib_ai.data.matrix_data import MatrixData
from lib_ai.dataset.xy_dataset import XYDataset
from lib_ai.model.base_model.base_model_models import (
    BaseModelEvalParamsModel,
    BaseModelFitParamsModel,
    BaseModelModel,
    BaseModelParamsModel,
    Scorers,
)
from lib_ai.scoring.utils.scorer.scorer_models import ScorerCallableModel


class BaseClassificationParamsModel(BaseModelParamsModel):
    scorers: NotRequired[Scorers]
    scorer: NotRequired[ScorerCallableModel]


class BaseClassificationEvalParamsModel(BaseModelEvalParamsModel): ...


class BaseClassificationFitParamsModel(BaseModelFitParamsModel): ...


class BaseClassificationModel[
    TParams: BaseClassificationParamsModel,
    TDataset: XYDataset,
    TFit: BaseClassificationFitParamsModel,
    TEval: BaseClassificationEvalParamsModel,
](
    BaseModelModel[
        TParams,
        TDataset,
        TFit,
        TEval,
    ]
):
    @abstractmethod
    def predict_probability(
        self,
        dataset: TDataset,
    ) -> MatrixData: ...
