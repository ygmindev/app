from __future__ import annotations

from typing import Mapping

from lib_ai.dataset.xy_dataset import XYDataset
from lib_ai.model.base_model import BaseModel
from lib_ai.model.base_model.base_model_models import (
    BaseModelEvalParamsModel,
    BaseModelFitParamsModel,
)
from lib_ai.model.classification.base_classification.base_classification_models import (
    BaseClassificationModel,
)
from lib_ai.scoring.scorer.cross_entropy_scorer import cross_entropy_scorer
from lib_shared.core.utils.merge import merge


class BaseClassification[
    TDataset: XYDataset,
    TFit: BaseModelEvalParamsModel,
    TEval: BaseModelFitParamsModel,
](
    BaseModel[
        TDataset,
        TFit,
        TEval,
    ],
    BaseClassificationModel[
        TDataset,
        TFit,
        TEval,
    ],
):
    def evaluate(
        self,
        dataset: TDataset,
        params: TEval | None = None,
    ) -> Mapping[str, float]:
        base_params: BaseModelEvalParamsModel = {"scorers": {"cross_entropy": cross_entropy_scorer}}
        return super().evaluate(
            dataset,
            merge(params, base_params),
        )

    def fit(
        self,
        dataset: TDataset,
        params: TFit | None = None,
    ) -> None:
        base_params: BaseModelFitParamsModel = {"scorer": cross_entropy_scorer}
        return super().fit(
            dataset,
            merge(params, base_params),
        )
