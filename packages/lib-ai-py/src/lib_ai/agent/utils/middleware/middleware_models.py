# template version: 1.0.0


from typing import Generic, TypeVar

from lib_shared.core.utils.base_model import BaseModel

TState = TypeVar("TState", bound=BaseModel)


class MiddlewareModel(Generic[TState]):
    name: str

    async def before(
        self,
        state: TState,
        node: str,
    ) -> TState: ...

    async def after(
        self,
        state: TState,
        node: str,
    ) -> TState: ...
