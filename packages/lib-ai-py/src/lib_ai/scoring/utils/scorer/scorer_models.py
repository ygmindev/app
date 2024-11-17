from abc import abstractmethod
from typing import Callable, NotRequired, Protocol, TypedDict

from lib_ai.data.matrix_data import MatrixData
from lib_ai.scoring.scorer.base_scorer.base_scorer_models import BaseScorerCallableModel


class ScorerCallableModel(Protocol):
    is_loss: bool
    name: str

    @abstractmethod
    def __call__(
        self,
        y_pred: MatrixData,
        y: MatrixData,
    ) -> float: ...


class ScorerParamsModel(TypedDict):
    is_loss: NotRequired[bool]
    name: str


type ScorerModel = Callable[[BaseScorerCallableModel], ScorerCallableModel]
