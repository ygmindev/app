from __future__ import annotations

from abc import abstractmethod

from lib_ai.data.matrix_data import MatrixData
from lib_ai.dataset.xy_dataset import XYDataset
from lib_ai.model.base_model.base_model_models import (
    BaseModelEvalParamsModel,
    BaseModelFitParamsModel,
    BaseModelModel,
    BaseModelParamsModel,
    BaseModelPredParamsModel,
)


class BaseClassificationParamsModel(BaseModelParamsModel): ...


class BaseClassificationEvalParamsModel(BaseModelEvalParamsModel): ...


class BaseClassificationFitParamsModel(BaseModelFitParamsModel): ...


class BaseClassificationPredParamsModel(BaseModelPredParamsModel): ...


class BaseClassificationModel[
    TParams: BaseClassificationParamsModel,
    TDataset: XYDataset,
    TFit: BaseClassificationFitParamsModel,
    TEval: BaseClassificationEvalParamsModel,
    TPred: BaseClassificationPredParamsModel,
](
    BaseModelModel[
        TParams,
        TDataset,
        TFit,
        TEval,
        TPred,
    ]
):
    @abstractmethod
    def predict_probability(
        self,
        dataset: TDataset,
        params: TPred | None = None,
    ) -> MatrixData: ...
