from __future__ import annotations

from typing import Mapping, Sequence

from lib_shared.core.utils.base_model.base_model import BaseModel

from lib_ai.core.utils.kfold.kfold_models import KfoldParamsModel
from lib_ai.data.base_data.base_data_models import BaseDataModel
from lib_ai.data.matrix_data import MatrixData
from lib_ai.dataset.xy_dataset.xy_dataset import XYDataset
from lib_ai.optimize.utils.optimize.optimize_models import OptimizeParamsModel
from lib_ai.scoring.utils.scorable.scorable_models import ScorerCallableModel


class CvResultModel(BaseModel):
    average: float
    scores: list[float]


class TrainableModel[
    TParams: BaseModel,
    TFit,
    TEval,
    TPred,
    TX: BaseDataModel,
    TY: BaseDataModel | None,
](BaseModel):
    scorer: ScorerCallableModel | list[ScorerCallableModel]
    params: TParams | None = None
    scorers: Sequence[ScorerCallableModel] | None = []
    objective: ScorerCallableModel | None = None

    def cv(
        self,
        dataset: XYDataset[TX, TY],
        kfold_params: KfoldParamsModel,
        instance_params: TParams | None = None,
        eval_params: TEval | None = None,
        fit_params: TFit | None = None,
    ) -> CvResultModel: ...

    def optimize(
        self,
        dataset: XYDataset[TX, TY],
        optimize_params: OptimizeParamsModel,
        kfold_params: KfoldParamsModel,
        instance_params: TParams | None = None,
        eval_params: TEval | None = None,
        fit_params: TFit | None = None,
    ) -> None: ...

    def predict(
        self,
        data: TX,
        params: TPred | None = None,
    ) -> MatrixData: ...

    def evaluate(
        self,
        dataset: XYDataset[TX, TY],
        params: TEval | None = None,
    ) -> Mapping[str, float]: ...

    def fit(
        self,
        dataset: XYDataset[TX, TY],
        params: TFit | None = None,
    ) -> None: ...
