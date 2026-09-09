from typing import AsyncIterable, Generic, TypeVar

from lib_shared.core.utils.base_model.base_model import BaseModel

TState = TypeVar("TState", bound=BaseModel)


class Streamable(
    BaseModel,
    Generic[TState],
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
