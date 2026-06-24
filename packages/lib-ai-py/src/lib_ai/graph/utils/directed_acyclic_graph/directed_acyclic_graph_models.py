# template version: 1.0.0

from typing import TypeVar

from lib_shared.core.utils.base_model import BaseModel

from lib_ai.agent.utils.streamable.streamable_models import StreamableModel

TState = TypeVar("TState", bound=BaseModel)


class _DirectedAcyclicGraphModel(StreamableModel[TState]):
    async def visualize(
        self,
        filepath: str,
    ) -> None: ...


class DirectedAcyclicGraphModel(_DirectedAcyclicGraphModel): ...
