from typing import Callable, Protocol, TypedDict, Union

from lib_ai.data.matrix_data import MatrixData


class ScorerProtocol(Protocol):
    is_loss: bool


type ScorerCallableModel = Callable[[MatrixData, MatrixData], float]

type ScorerCallableProtocolModel = Union[ScorerProtocol, ScorerCallableModel]


class ScorerParamsModel(TypedDict):
    is_loss: bool


type ScorerModel[T: ScorerCallableModel] = Callable[[T], Union[T, ScorerProtocol]]
