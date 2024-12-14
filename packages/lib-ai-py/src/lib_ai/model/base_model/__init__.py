from __future__ import annotations

from typing import Mapping, Sequence, cast

import numpy as np
from lib_ai.core.utils.kfold import kfold
from lib_ai.core.utils.kfold.kfold_models import KfoldParamsModel
from lib_ai.dataset.xy_dataset import XYDataset
from lib_ai.model.base_model.base_model_models import (
    BaseModelCvModel,
    BaseModelEvalParamsModel,
    BaseModelFitParamsModel,
    BaseModelModel,
    BaseModelParamsModel,
    BaseModelPredParamsModel,
    OptimizeParamsOptionalModel,
)
from lib_ai.optimize.utils.optimize import optimize
from lib_ai.scoring.scoring_constants import ScoringMode
from lib_ai.scoring.utils.scorer.scorer_models import ScorerCallableModel
from lib_shared.core.utils.get_item import get_item
from lib_shared.core.utils.logger import logger
from lib_shared.core.utils.merge import merge
from lib_shared.core.utils.not_found_exception import NotFoundException


class BaseModel[
    TParams: BaseModelParamsModel,
    TDataset: XYDataset,
    TFit: BaseModelFitParamsModel,
    TEval: BaseModelEvalParamsModel,
    TPred: BaseModelPredParamsModel,
](
    BaseModelModel[
        TParams,
        TDataset,
        TFit,
        TEval,
        TPred,
    ]
):
    def __init__(
        self,
        params: TParams | None = None,
    ) -> None:
        self._params = params

    def cv(
        self,
        dataset: TDataset,
        instance_params: TParams,
        kfold_params: KfoldParamsModel,
        eval_params: TEval | None = None,
        fit_params: TFit | None = None,
    ) -> BaseModelCvModel:
        Instance = type(self)
        scorer = get_item(self._params, "scorer")

        scores = []
        for train, test in kfold(**merge(kfold_params, {"n_rows": len(dataset)})):
            instance = Instance(params=merge(instance_params, self._params))
            trainset, testset = dataset[train], dataset[test]
            instance.fit(
                dataset=trainset,
                params=fit_params,
            )
            score = instance.evaluate(testset, params=eval_params)[scorer.name]
            scores.append(score)

        result: BaseModelCvModel = {"average": float(np.average(scores)), "scores": scores}
        logger.debug(result)
        return result

    def optimize(
        self,
        dataset: TDataset,
        instance_params: TParams,
        kfold_params: KfoldParamsModel,
        params: OptimizeParamsOptionalModel,
        eval_params: TEval | None = None,
        fit_params: TFit | None = None,
    ) -> None:
        scorer = get_item(self._params, "scorer")
        scoring_mode = ScoringMode.MIN if scorer.is_loss else ScoringMode.MAX

        def _objective(opt_params: TParams) -> float:
            opt_params = cast(
                TParams,
                merge(
                    self._params,
                    instance_params,
                    opt_params,
                ),
            )
            result = self.cv(
                dataset=dataset,
                eval_params=eval_params,
                fit_params=fit_params,
                instance_params=opt_params,
                kfold_params=kfold_params,
            )
            return result["average"]

        optimize_params = merge(
            {
                "objective": _objective,
                "scoring_mode": scoring_mode,
            },
            params,
        )
        best = optimize(**optimize_params)
        logger.debug(best)
        self.__init__(params=cast(TParams, merge(self._params, best)))

    def evaluate(
        self,
        dataset: TDataset,
        params: TEval | None = None,
    ) -> Mapping[str, float]:
        scorers = get_item(self._params, "scorers")

        y = dataset.y
        if y is None:
            raise NotFoundException("y")

        y_pred = self.predict(dataset)
        if y_pred is None:
            raise NotFoundException("y_pred")

        result = {scorer.name: scorer(y_pred, y) for scorer in scorers}
        logger.debug(result)
        return result

    @property
    def scorer(self) -> ScorerCallableModel:
        return get_item(self._params, "scorer")
