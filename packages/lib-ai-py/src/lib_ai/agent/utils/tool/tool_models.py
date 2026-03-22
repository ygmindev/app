# template version: 1.0.0

from typing import Generic, TypeVar

from lib_shared.core.utils.base_model import BaseModel

TParams = TypeVar("TParams", bound=BaseModel)
TResult = TypeVar("TResult", default=str)


class _ToolModel(Generic[TParams, TResult]):
    async def execute(
        self,
        params: TParams,
    ) -> TResult: ...


class ToolModel(_ToolModel): ...
