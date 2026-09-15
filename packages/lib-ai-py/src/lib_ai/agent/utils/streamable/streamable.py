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
        raise NotImplementedError(f"{type(self).__name__}.run is not implemented")

    async def stream(
        self,
        params: TState,
    ) -> AsyncIterable[TState]:
        yield await self.run(params)
