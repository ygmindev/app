# template version: 1.0.0

from enum import StrEnum
from typing import Callable, Generic, TypeVar

from lib_shared.core.utils.base_model import BaseModel

from lib_ai.agent.utils.runnable.runnable_models import RunnableModel

TState = TypeVar("TState", bound=BaseModel)


class GraphNodeType(StrEnum):
    START = "START"
    END = "END"


GraphEdgeModel = (
    tuple[GraphNodeType | str, GraphNodeType | str]
    | tuple[GraphNodeType | str, Callable[[TState], str]]
)


class _DirectedAcyclicGraphModel(RunnableModel, Generic[TState]):
    async def visualize(
        self,
        filepath: str,
    ) -> None: ...


class DirectedAcyclicGraphModel(_DirectedAcyclicGraphModel): ...
