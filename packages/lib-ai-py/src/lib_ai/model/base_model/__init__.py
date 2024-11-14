from __future__ import annotations

from typing import Any, Mapping, Self, Unpack, cast

import numpy as np
from lib_ai.core.utils.kfold import kfold
from lib_ai.core.utils.kfold.kfold_models import KfoldParamsModel
from lib_ai.dataset.xy_dataset import XYDataset
from lib_ai.model.base_model.base_model_models import (
    BaseModelCvModel,
    BaseModelCvParamsModel,
    BaseModelEvalParamsModel,
    BaseModelFitParamsModel,
    BaseModelModel,
)
from lib_ai.optimize.utils.optimize import optimize
from lib_ai.optimize.utils.optimize.optimize_models import OptimizeParamsModel
from lib_shared.core.utils.get_item import get_item
from lib_shared.core.utils.logger import logger
from lib_shared.core.utils.merge import merge
from lib_shared.core.utils.not_found_exception import NotFoundException
from lib_shared.core.utils.pick import pick


class BaseModel[
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
    _params: TParams

    def __init__(self, params: TParams) -> None:
        self._params = params

    def cv(
        self,
        params: BaseModelCvParamsModel,
        dataset: TDataset,
        instance_params: TParams,
        kfold_params: KfoldParamsModel,
        eval_params: TEval | None = None,
        fit_params: TFit | None = None,
    ) -> BaseModelCvModel:
        Instance = type(self)
        scorer = get_item(params, "scorer")

        scores = []
        for train, test in kfold(**merge(kfold_params, {"n_rows": len(dataset)})):
            instance = Instance(params=merge(instance_params, self._params))
            trainset, testset = dataset[train], dataset[test]
            instance.fit(dataset=trainset, params=fit_params)
            score = instance.evaluate(testset, params=eval_params)[scorer]
            scores.append(score)

        result: BaseModelCvModel = {"average": float(np.average(scores)), "scores": scores}
        logger.debug(result)
        return result

    def optimize(
        self,
        dataset: TDataset,
        params: OptimizeParamsModel,
        instance_params: TParams,
        kfold_params: KfoldParamsModel,
        eval_params: TEval | None = None,
        fit_params: TFit | None = None,
    ):
        x = optimize(
            merge(
                {"objective": a, "scoring_mode": },
                params,
            ),
        )

    def evaluate(
        self,
        dataset: TDataset,
        params: TEval | None = None,
    ) -> Mapping[str, float]:
        scorers = get_item(params, "scorers")
        y = dataset.y
        if y is None:
            raise NotFoundException("y")

        y_pred = self.predict(dataset)
        if y_pred is None:
            raise NotFoundException("y_pred")

        scores = {k: v(y_pred, y) for k, v in scorers.items()}
        logger.debug(scores)

        return scores
