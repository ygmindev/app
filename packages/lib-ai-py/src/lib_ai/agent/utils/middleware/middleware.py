# template version: 1.0.0


from lib_shared.core.utils.base_model import BaseModel

from .middleware_models import MiddlewareModel, TState


class Middleware(MiddlewareModel[TState], BaseModel):
    name: str = ""
