from typing import AsyncIterable

from lib_ai.agent.utils.runnable.runnable_models import RunnableModel, TState


class Runnable(RunnableModel[TState]):
    async def run(
        self,
        params: TState,
    ) -> TState:
        result = params.clone()
        updates = [x async for x in self.stream(params)]
        for update in updates:
            result = result.update(value=update)
        return result

    async def stream(
        self,
        params: TState,
    ) -> AsyncIterable[TState]:
        return
        yield
