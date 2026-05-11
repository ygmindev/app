# template version: 1.0.0

from typing import Callable, TypeVar

from lib_shared.core.utils.base_model import BaseModel

from lib_ai.agent.utils.runnable.runnable_models import RunnableModel
from lib_ai.graph.constants import GraphNodeType

TState = TypeVar("TState", bound=BaseModel)


GraphEdgeModel = (
    tuple[GraphNodeType | str, GraphNodeType | str]
    | tuple[
        GraphNodeType | str,
        Callable[[TState], str],
        dict[str, GraphNodeType | str] | list[GraphNodeType | str],
    ]
)


class _DirectedAcyclicGraphModel(RunnableModel[TState]):
    async def visualize(
        self,
        filepath: str,
    ) -> None: ...


class DirectedAcyclicGraphModel(_DirectedAcyclicGraphModel): ...
