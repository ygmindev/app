# template version: 1.0.0

from typing import Generic, Type, TypeVar

from lib_shared.core.utils.base_model import BaseModel
from lib_shared.core.utils.field.field import Field

TParams = TypeVar("TParams", bound=BaseModel)
TResult = TypeVar("TResult", default=str)


class _ToolModel(
    BaseModel,
    Generic[TParams, TResult],
):
    input_type: Type[TParams]
    name: str = Field(default="")
    description: str = Field(default="")

    async def execute(
        self,
        params: TParams,
    ) -> TResult: ...


class ToolModel(_ToolModel[TParams, TResult]): ...
