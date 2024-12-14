from __future__ import annotations

from typing import cast

from lib_ai.dataset.xy_dataset import XYDataset
from lib_ai.model.base_model import BaseModel
from lib_ai.model.classification.base_classification.base_classification_models import (
    BaseClassificationEvalParamsModel,
    BaseClassificationFitParamsModel,
    BaseClassificationModel,
    BaseClassificationParamsModel,
    BaseClassificationPredParamsModel,
)
from lib_ai.scoring.scorer.accuracy_scorer import accuracy_scorer
from lib_ai.scoring.scorer.cross_entropy_scorer import cross_entropy_scorer
from lib_ai.scoring.scorer.f1_scorer import f1_scorer
from lib_ai.scoring.scorer.recall_scorer import recall_scorer
from lib_shared.core.utils.merge import merge


class BaseClassification[
    TParams: BaseClassificationParamsModel,
    TDataset: XYDataset,
    TFit: BaseClassificationFitParamsModel,
    TEval: BaseClassificationEvalParamsModel,
    TPred: BaseClassificationPredParamsModel,
](
    BaseModel[
        TParams,
        TDataset,
        TFit,
        TEval,
        TPred,
    ],
    BaseClassificationModel[
        TParams,
        TDataset,
        TFit,
        TEval,
        TPred,
    ],
):
    def __init__(self, params: TParams | None = None) -> None:
        params = cast(
            TParams,
            merge(
                params,
                {
                    "objective": cross_entropy_scorer,
                    "scorers": [
                        accuracy_scorer,
                        f1_scorer,
                        recall_scorer,
                    ],
                    "scorer": f1_scorer,
                },
            ),
        )
        super().__init__(params=params)
