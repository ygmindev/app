from __future__ import annotations

from abc import abstractmethod

from lib_ai.data.base_data.base_data_models import BaseDataModel
from lib_ai.data.matrix_data import MatrixData
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
    TFit: BaseClassificationFitParamsModel,
    TEval: BaseClassificationEvalParamsModel,
    TPred: BaseClassificationPredParamsModel,
    TX: BaseDataModel,
    TY: BaseDataModel | None,
](
    BaseModelModel[
        TParams,
        TFit,
        TEval,
        TPred,
        TX,
        TY,
    ]
):
    @abstractmethod
    def predict_probability(
        self,
        data: TX,
        params: TPred | None = None,
    ) -> MatrixData: ...
