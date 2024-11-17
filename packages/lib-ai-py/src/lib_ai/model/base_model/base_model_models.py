from __future__ import annotations

from abc import ABC, abstractmethod
from typing import List, Mapping, Never, NotRequired, Sequence, TypedDict

from lib_ai.core.utils.kfold.kfold_models import KfoldParamsModel
from lib_ai.data.matrix_data import MatrixData
from lib_ai.dataset.xy_dataset import XYDataset
from lib_ai.optimize.utils.optimize.optimize_models import OptimizeParamsModel
from lib_ai.scoring.utils.scorer.scorer_models import ScorerCallableModel

type Scorers = Mapping[str, ScorerCallableModel]


class OptimizeParamsOptionalModel(OptimizeParamsModel):
    objective: NotRequired[Never]


class BaseModelParamsModel(TypedDict):
    scorers: Sequence[ScorerCallableModel]
    objective: ScorerCallableModel


class BaseModelEvalParamsModel(TypedDict): ...


class BaseModelFitParamsModel(TypedDict): ...


class BaseModelCvParamsModel(TypedDict): ...


class BaseModelCvModel(TypedDict):
    average: float
    scores: List[float]


class BaseModelModel[
    TParams: BaseModelParamsModel,
    TDataset: XYDataset,
    TFit: BaseModelFitParamsModel,
    TEval: BaseModelEvalParamsModel,
](ABC):
    @abstractmethod
    def __init__(self, params: TParams) -> None: ...

    @abstractmethod
    def cv(
        self,
        dataset: TDataset,
        params: BaseModelCvParamsModel,
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
    def scorers(self) -> Scorers: ...

    @property
    @abstractmethod
    def scorer(self, name: str | None = None) -> ScorerCallableModel: ...
