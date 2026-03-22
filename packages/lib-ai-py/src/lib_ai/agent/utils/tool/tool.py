# template version: 1.0.0

import asyncio
from typing import Optional, Type

from langchain.tools import BaseTool
from lib_shared.core.utils.base_model import BaseModel

from .tool_models import ToolModel, TParams, TResult, _ToolModel


class _Tool(BaseTool, _ToolModel[TParams, TResult]):
    input_type: Type[TParams]
    name: str = ""
    description: Optional[str] = None

    def __init__(
        self,
        input_type: Type[BaseModel],
        **kwargs,
    ) -> None:
        super().__init__(
            **kwargs,
            input_type=input_type,
            args_schema=input_type,
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


class Tool(_Tool, ToolModel): ...
