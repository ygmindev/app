# template version: 1.0.0


from typing import Iterator, Optional, cast

from langchain_core.language_models.chat_models import BaseChatModel
from langchain_ollama import ChatOllama
from lib_shared.core.utils.base_model import BaseModel
from lib_shared.core.utils.uninitialized_exception import UninitializedException

from lib_ai.agent.utils.llm_message import LlmMessage
from lib_ai.agent.utils.tool import Tool
from lib_ai.model.llm.constants import LLM_NAME

from .llm_models import (
    LlmModel,
    _LlmModel,
)


class _Llm(BaseModel, _LlmModel):
    name: str = LLM_NAME.GLM_5
    temperature: float = 0.0
    max_tokens: int = 4096
    schema: Optional[BaseModel] = None

    _llm: Optional[BaseChatModel] = None

    def post_init(self) -> None:
        match self.name:
            case LLM_NAME.GLM_5:
                self._llm = ChatOllama(
                    model="glm-5:cloud",
                    temperature=self.temperature,
                    num_predict=self.max_tokens,
                )
        if self._llm is not None and self.schema is not None:
            self._llm = cast(
                BaseChatModel,
                self._llm.with_structured_output(cast(dict, self.schema)),
            )

    def bind_tools(
        self,
        tools: list[Tool],
    ) -> None:
        if not self._llm:
            raise UninitializedException("_llm")
        self._llm = cast(BaseChatModel, self._llm.bind_tools(tools))

    async def invoke(
        self,
        messages: list[LlmMessage],
    ) -> LlmMessage:
        if not self._llm:
            raise UninitializedException("_llm")
        result = await self._llm.ainvoke([x.serialize() for x in messages])
        return LlmMessage.deserialize(result)

    async def stream(
        self,
        messages: list[LlmMessage],
    ) -> Iterator[LlmMessage]:
        if not self._llm:
            raise UninitializedException("_llm")
        return map(
            LlmMessage.deserialize,
            self._llm.stream([x.serialize() for x in messages]),
        )


class Llm(_Llm, LlmModel): ...
