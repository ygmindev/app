# template version: 1.0.0

from enum import Enum
from typing import AsyncIterable, Callable, Generic, TypeVar

from lib_shared.core.utils.base_model import BaseModel

TState = TypeVar("TState", bound=BaseModel)
TParams = TypeVar("TParams")


class GraphNodeType(str, Enum):
    START = "START"
    END = "END"


GraphEdgeModel = (
    tuple[GraphNodeType | str, GraphNodeType | str]
    | tuple[GraphNodeType | str, Callable[[TState], str]]
    # | tuple[GraphNodeType | str, Callable[[TState], str], dict[str, str]]
)


class _DirectedAcyclicGraphModel(Generic[TState, TParams]):
    async def stream(
        self,
        params: TParams,
    ) -> AsyncIterable[TState]: ...

    async def visualize(
        self,
        filename: str,
    ) -> None: ...


class DirectedAcyclicGraphModel(_DirectedAcyclicGraphModel): ...
