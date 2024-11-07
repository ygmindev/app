from __future__ import annotations

from typing import Mapping

from lib_ai.dataset.xy_dataset import XYDataset
from lib_ai.model.base_model.base_model_models import (
    BaseModelEvalParamsModel,
    BaseModelFitParamsModel,
    BaseModelModel,
)
from lib_shared.core.utils.not_found_exception import NotFoundException


class BaseModel[
    TDataset: XYDataset,
    TFit: BaseModelFitParamsModel,
    TEval: BaseModelEvalParamsModel,
](
    BaseModelModel[
        TDataset,
        TFit,
        TEval,
    ]
):
    def evaluate(
        self,
        dataset: TDataset,
        params: TEval | None = None,
    ) -> Mapping[str, float]:
        if params is None:
            params = {}

        scorers = params.get("scorers")
        if scorers is None:
            raise NotFoundException()

        y = dataset.y
        self.predict(dataset)
        if dataset.y is None or y is None:
            raise NotFoundException()

        return {k: v(dataset.y, y) for k, v in scorers.items()}
