# template version: 1.0.0


from typing import AsyncIterable, Generic, TypeVar

from lib_shared.core.utils.base_model.base_model import BaseModel

TState = TypeVar("TState", bound=BaseModel)


class StreamableModel(Generic[TState]):
    async def stream(
        self,
        params: TState,
    ) -> AsyncIterable[TState]: ...

    async def stream_message(
        self,
        params: TState,
    ) -> AsyncIterable[str]: ...

    async def run(
        self,
        params: TState,
    ) -> TState: ...
