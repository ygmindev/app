from typing import Callable, Protocol

from lib_ai.data.matrix_data import MatrixData

ScorerModel = Callable[[MatrixData, MatrixData], float]


class DecoratedScorerModel[TType: ScorerModel](Protocol):
    name: str
    is_loss: bool = False
    __call__: TType


class ScorableModel[TType: ScorerModel](Protocol):
    def __call__(
        self,
        name: str | None = None,
        is_loss: bool = False,
    ) -> Callable[[TType], DecoratedScorerModel[TType]]: ...
