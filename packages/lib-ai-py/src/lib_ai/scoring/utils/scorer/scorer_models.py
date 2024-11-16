from abc import abstractmethod
from typing import Callable, Protocol, TypedDict, Union

from lib_ai.data.matrix_data import MatrixData


class ScorerCallableModel(Protocol):
    is_loss: bool

    @abstractmethod
    def __call__(
        self,
        y_pred: MatrixData,
        y: MatrixData,
    ) -> float: ...


class ScorerParamsModel(TypedDict):
    is_loss: bool


type ScorerModel[T: ScorerCallableModel] = Callable[[T], Union[T, ScorerCallableModel]]
