# template version: 1.0.0


from typing import Generic, TypeVar

from lib_shared.core.utils.base_model import BaseModel
from lib_shared.core.utils.field.field import Field

TState = TypeVar("TState", bound=BaseModel)


class OrchestratorModel(
    BaseModel,
    Generic[TState],
):
    name: str = Field()
