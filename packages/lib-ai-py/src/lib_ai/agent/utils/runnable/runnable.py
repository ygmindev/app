from typing import AsyncIterable, Optional, Sequence

from lib_shared.core.utils.base_model.base_model import BaseModel
from lib_shared.core.utils.logger.logger import logger

from lib_ai.agent.utils.runnable.runnable_models import RunnableModel, TState


class Runnable(BaseModel, RunnableModel[TState]):
    messages: Optional[Sequence[str]] = None

    async def run(
        self,
        params: TState,
    ) -> TState:
        if self.messages:
            logger.info(*self.messages)
        result = params.clone()
        updates = [x async for x in self.stream(params)]
        for update in updates:
            result = result.update(update)
        return result

    async def stream(
        self,
        params: TState,
    ) -> AsyncIterable[TState]:
        return
        yield
