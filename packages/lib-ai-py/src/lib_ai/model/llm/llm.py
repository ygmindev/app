# template version: 1.0.0


from typing import AsyncIterator, Optional, cast

from langchain_core.language_models.chat_models import BaseChatModel
from langchain_core.messages import AIMessageChunk
from langchain_openai import ChatOpenAI
from lib_model.chat.message.constants import MessageRole
from lib_shared.core.utils.base_model import BaseModel
from lib_shared.core.utils.field.field import Field
from lib_shared.core.utils.private_field.private_field import PrivateField
from lib_shared.core.utils.uninitialized_exception import UninitializedException

from lib_ai.agent.utils.llm_message import LlmMessage
from lib_ai.agent.utils.tool import Tool
from lib_ai.model.llm.constants import LLM_NAME

from .llm_models import (
    LlmModel,
    _LlmModel,
)


class _Llm(BaseModel, _LlmModel):
    name: str = Field(default=LLM_NAME.QWEN_3_5)
    temperature: float = Field(default=0.0)
    max_tokens: int = Field(default=4096)
    output_schema: Optional[BaseModel] = Field(default=None)

    _llm: Optional[BaseChatModel] = PrivateField()

    def post_init(self) -> None:
        match self.name:
            case LLM_NAME.GLM_5 | LLM_NAME.LLAMA_3_2 | LLM_NAME.QWEN_3_5:
                self._llm = ChatOpenAI(
                    api_key="lmstudio",
                    base_url="http://localhost:1234/v1",
                    model=self.name,
                    temperature=self.temperature,
                    max_tokens=self.max_tokens,
                )
        if self._llm is not None and self.output_schema is not None:
            self._llm = cast(
                BaseChatModel,
                self._llm.with_structured_output(cast(dict, self.output_schema)),
            )

    @property
    def llm(self) -> BaseChatModel:
        if not self._llm:
            raise UninitializedException("_llm")
        return self._llm

    def bind_tools(
        self,
        tools: list[Tool],
    ) -> None:
        self._llm = cast(BaseChatModel, self.llm.bind_tools(tools))

    async def _chunks(
        self,
        messages: list[LlmMessage],
    ) -> AsyncIterator[AIMessageChunk]:
        serialized = [x.serialize() for x in messages]
        async for chunk in self.llm.astream(serialized):
            yield cast(AIMessageChunk, chunk)

    async def stream_message(
        self,
        prompt: str,
    ) -> AsyncIterator[str]:
        user_message = LlmMessage(
            role=MessageRole.USER,
            content=prompt,
        )
        async for chunk in self._chunks([user_message]):
            if isinstance(chunk.content, str) and chunk.content:
                yield chunk.content

    async def run(
        self,
        messages: list[LlmMessage],
    ) -> Optional[LlmMessage]:
        result: Optional[AIMessageChunk] = None
        async for chunk in self._chunks(messages):
            result = chunk if result is None else result + chunk
        if result is not None:
            return LlmMessage.deserialize(result)
        return None


class Llm(_Llm, LlmModel): ...
