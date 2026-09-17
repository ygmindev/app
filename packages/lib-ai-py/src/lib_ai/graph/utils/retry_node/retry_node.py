from lib_shared.core.utils.base_model.base_model import BaseModel
from lib_shared.core.utils.field.field import Field
from lib_shared.core.utils.logger.logger import logger

from lib_ai.graph.utils.graph_node import GraphNode


class RetryNode[TState: BaseModel](GraphNode[TState]):
    name: str = "retry"
    node: GraphNode = Field()
    max_attempts: int = Field(default=2)

    def messages(
        self,
        state: TState,
    ) -> list[str] | None:
        inner = self.node.messages(state) if self.node.messages else None
        label = (
            f"RetryNode({self.node.name}): "
            f"max_attempts={self.max_attempts}, "
            f"attempt={getattr(state, 'retry_attempt', 0) or 1}"
        )
        return [label, *(inner or [])]

    def should_retry(self, state: TState) -> bool:
        return self.node.should_retry(state)

    async def run(
        self,
        params: TState,
    ) -> TState:
        state = params
        for attempt in range(1, self.max_attempts + 1):
            if hasattr(state, "retry_attempt"):
                state.retry_attempt = attempt
            logger.info(
                f"RetryNode({self.node.name}): attempt {attempt}/{self.max_attempts}"
            )
            state = await self.node.run(state)
            if attempt >= self.max_attempts:
                break
            if not self.node.should_retry(state):
                break
        return state
