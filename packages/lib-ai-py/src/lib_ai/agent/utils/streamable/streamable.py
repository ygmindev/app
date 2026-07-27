from typing import AsyncIterable

from lib_ai.agent.utils.streamable.streamable_models import (
    StreamableModel,
    TState,
)


class Streamable(
    StreamableModel[TState],
):
    async def run(
        self,
        params: TState,
    ) -> TState:
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
