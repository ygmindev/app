from __future__ import annotations

from abc import ABC, abstractmethod
from typing import List, Mapping, Never, NotRequired, Sequence, TypedDict

from lib_ai.core.utils.kfold.kfold_models import KfoldParamsModel
from lib_ai.data.matrix_data import MatrixData
from lib_ai.dataset.xy_dataset import XYDataset
from lib_ai.optimize.utils.optimize.optimize_models import OptimizeParamsModel
from lib_ai.scoring.utils.scorer.scorer_models import ScorerCallableModel


class OptimizeParamsOptionalModel(OptimizeParamsModel):
    objective: NotRequired[Never]


class BaseModelParamsModel(TypedDict):
    scorer: NotRequired[str]
    scorers: NotRequired[Sequence[ScorerCallableModel]]
    objective: NotRequired[ScorerCallableModel]


class BaseModelEvalParamsModel(TypedDict): ...


class BaseModelFitParamsModel(TypedDict): ...


class BaseModelPredParamsModel(TypedDict): ...


class BaseModelCvModel(TypedDict):
    average: float
    scores: List[float]


class BaseModelModel[
    TParams: BaseModelParamsModel,
    TDataset: XYDataset,
    TFit: BaseModelFitParamsModel,
    TEval: BaseModelEvalParamsModel,
    TPred: BaseModelPredParamsModel,
](ABC):
    _params: TParams | None

    @abstractmethod
    def __init__(self, params: TParams) -> None: ...

    @abstractmethod
    def cv(
        self,
        dataset: TDataset,
        instance_params: TParams,
        kfold_params: KfoldParamsModel,
        eval_params: TEval | None = None,
        fit_params: TFit | None = None,
    ): ...

    @abstractmethod
    def optimize(
        self,
        dataset: TDataset,
        params: OptimizeParamsOptionalModel,
        instance_params: TParams,
        kfold_params: KfoldParamsModel,
        eval_params: TEval | None = None,
        fit_params: TFit | None = None,
    ): ...

    @abstractmethod
    def predict(
        self,
        dataset: TDataset,
        params: TPred | None = None,
    ) -> MatrixData: ...

    @abstractmethod
    def evaluate(
        self,
        dataset: TDataset,
        params: TEval | None = None,
    ) -> Mapping[str, float]: ...

    @abstractmethod
    def fit(
        self,
        dataset: TDataset,
        params: TFit | None = None,
    ) -> None: ...

    @property
    @abstractmethod
    def scorer(self) -> ScorerCallableModel: ...
