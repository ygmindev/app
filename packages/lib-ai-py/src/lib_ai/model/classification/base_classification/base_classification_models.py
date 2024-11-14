from __future__ import annotations

from abc import abstractmethod
from typing import Any, Mapping

from lib_ai.data.matrix_data import MatrixData
from lib_ai.dataset.xy_dataset import XYDataset
from lib_ai.model.base_model.base_model_models import (
    BaseModelEvalParamsModel,
    BaseModelFitParamsModel,
    BaseModelModel,
)


class BaseClassificationModel[
    TParams: Mapping[str, Any],
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
):
    @abstractmethod
    def predict_probability(
        self,
        dataset: TDataset,
    ) -> MatrixData: ...
