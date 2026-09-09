# template version: 1.0.0

import asyncio
from typing import Type, TypeVar

from langchain_core.tools import BaseTool
from lib_shared.core.utils.base_model import BaseModel
from lib_shared.core.utils.field.field import Field

TParams = TypeVar("TParams", bound=BaseModel)
TResult = TypeVar("TResult", default=str)


class _Tool[TParams, TResult](
    BaseTool,
):
    input_type: Type[TParams]
    name: str = Field(default="")
    description: str = Field(default="")

    def __init__(
        self,
        input_type: Type[BaseModel],
        descriptions: list[str] | None = None,
        **kwargs,
    ) -> None:
        descriptions = descriptions or []
        super().__init__(
            **kwargs,
            input_type=input_type,
            args_schema=input_type,
            description="\n".join(descriptions),
        )

    async def execute(
        self,
        params: TParams,
    ) -> TResult: ...

    def _run(
        self,
        **kwargs,
    ) -> TResult:
        return asyncio.run(self._arun(**kwargs))

    async def _arun(
        self,
        **kwargs,
    ) -> TResult:
        return await self.execute(params=self.input_type(**kwargs))


class Tool(_Tool[TParams, TResult]): ...
