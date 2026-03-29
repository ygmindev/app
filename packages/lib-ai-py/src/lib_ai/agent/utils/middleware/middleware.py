# template version: 1.0.0


from lib_shared.core.utils.base_model import BaseModel

from .middleware_models import MiddlewareModel, TState


class Middleware(BaseModel, MiddlewareModel[TState]):
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
