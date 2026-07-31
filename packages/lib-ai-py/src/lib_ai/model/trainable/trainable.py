from __future__ import annotations

from typing import Mapping

import numpy as np
from lib_shared.core.utils.base_model.base_model import BaseModel
from lib_shared.core.utils.get_item import get_item
from lib_shared.core.utils.logger.logger import logger
from lib_shared.core.utils.not_found_exception import NotFoundException

from lib_ai.core.utils.kfold import kfold
from lib_ai.core.utils.kfold.kfold_models import KfoldParamsModel
from lib_ai.data.base_data.base_data_models import BaseDataModel
from lib_ai.dataset.xy_dataset.xy_dataset import XYDataset
from lib_ai.model.trainable.trainable_models import CvResultModel, TrainableModel


class Trainable[
    TParams: BaseModel,
    TFit,
    TEval,
    TPred,
    TX: BaseDataModel,
    TY: BaseDataModel | None,
](
    TrainableModel[
        TParams,
        TFit,
        TEval,
        TPred,
        TX,
        TY,
    ]
):
    def cv(
        self,
        dataset: XYDataset[TX, TY],
        kfold_params: KfoldParamsModel,
        instance_params: TParams | None = None,
        eval_params: TEval | None = None,
        fit_params: TFit | None = None,
    ) -> CvResultModel:
        Cls = type(self)
        scorer_primary = (
            self.scorer[0] if isinstance(self.scorer, list) else self.scorer
        )

        scores = []
        kfold_params.n_rows = len(dataset)
        for train, test in kfold(kfold_params):
            params = self.params or instance_params
            if params and instance_params:
                params = params.update(instance_params)
            instance = Cls(params=params)
            trainset, testset = dataset[train], dataset[test]
            instance.fit(
                dataset=trainset,
                params=fit_params,
            )
            score = instance.evaluate(testset, params=eval_params)[scorer_primary.name]
            scores.append(score)

        result = CvResultModel(
            average=float(np.average(scores)),
            scores=scores,
        )
        logger.info(result)
        return result

    def evaluate(
        self,
        dataset: XYDataset[TX, TY],
        params: TEval | None = None,
    ) -> Mapping[str, float]:
        scorers = get_item(self.params, "scorers")

        y = dataset.y
        if y is None:
            raise NotFoundException("y")

        y_pred = self.predict(dataset.x)
        if y_pred is None:
            raise NotFoundException("y_pred")

        result = {scorer.name: scorer(y_pred, y) for scorer in scorers}
        logger.debug(result)
        return result
