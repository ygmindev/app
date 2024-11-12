from __future__ import annotations

from typing import Mapping

from lib_ai.dataset.xy_dataset import XYDataset
from lib_ai.model.base_model.base_model_models import (
    BaseModelEvalParamsModel,
    BaseModelFitParamsModel,
    BaseModelModel,
)
from lib_shared.core.utils.get_item import get_item
from lib_shared.core.utils.logger import logger
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

        scorers = get_item(params, "scorers")
        y = dataset.y
        y_pred = self.predict(dataset)
        if y_pred is None or y is None:
            raise NotFoundException()

        scores = {k: v(y_pred, y) for k, v in scorers.items()}
        logger.debug(scores)

        return scores
