# template version: 1.0.0


from typing import AsyncIterable, Generic, TypeVar

from lib_shared.core.utils.base_model.base_model import BaseModel

TState = TypeVar("TState", bound=BaseModel)


class StreamableModel(
    BaseModel,
    Generic[TState],
):
    async def run(
        self,
        params: TState,
    ) -> TState: ...

    async def stream(
        self,
        params: TState,
    ) -> AsyncIterable[TState]: ...
