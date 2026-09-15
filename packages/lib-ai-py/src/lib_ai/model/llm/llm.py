# template version: 1.0.0


import asyncio
from typing import Any, AsyncIterator, cast

import tiktoken
from langchain_core.language_models.chat_models import BaseChatModel
from langchain_core.messages import AIMessageChunk
from langchain_openai import ChatOpenAI
from lib_shared.core.utils.base_model.base_model import BaseModel
from lib_shared.core.utils.field.field import Field
from lib_shared.core.utils.get_env.get_env import get_env
from lib_shared.core.utils.logger.logger import logger
from lib_shared.core.utils.private_field.private_field import PrivateField
from lib_shared.core.utils.uninitialized_exception import UninitializedException

from lib_ai.agent.utils.ai_message.ai_message import AIMessage
from lib_ai.agent.utils.ai_message.constants import MessageRole
from lib_ai.agent.utils.tool import Tool
from lib_ai.model.llm.constants import LLM_NAME, LLM_PROVIDER

LLM_SEMAPHORE = asyncio.Semaphore(4)


class _Llm(BaseModel):
    provider: str = Field(default=LLM_PROVIDER.OPENROUTER)
    name: str = Field(default=LLM_NAME.NEMOTRON_ULTRA_3)
    temperature: float = Field(default=0.0)
    max_tokens: int = Field(default=4096)
    output_schema: BaseModel | None = Field(default=None)
    secrets: dict[str, str] = Field(
        default_factory=lambda: {
            LLM_PROVIDER.OPENROUTER: get_env("SERVER_APP_OPENROUTER_SECRET"),
        }
    )

    _llm: BaseChatModel | None = PrivateField()

    def model_post_init(self, __context: Any) -> None:
        match self.provider:
            case LLM_PROVIDER.LMSTUDIO:
                self._llm = ChatOpenAI(
                    api_key=lambda: "lmstudio",
                    base_url="http://localhost:1234/v1",
                    model=self.name,
                    temperature=self.temperature,
                    max_completion_tokens=self.max_tokens,
                    # extra_body={"chat_template_kwargs": {"enable_thinking": False}},
                    extra_body={
                        "plugins": [
                            {
                                "id": "file-parser",
                                "pdf": {
                                    "engine": "cloudflare-ai"  # Free built-in parser engine
                                },
                            }
                        ]
                    },
                )
            case LLM_PROVIDER.OPENROUTER:
                self._llm = ChatOpenAI(
                    api_key=lambda: self.secrets.get(LLM_PROVIDER.OPENROUTER, ""),
                    base_url="https://openrouter.ai/api/v1",
                    model=self.name,
                    temperature=self.temperature,
                    max_completion_tokens=self.max_tokens,
                    extra_body={
                        "plugins": [
                            {
                                "id": "file-parser",
                                "pdf": {
                                    "engine": "cloudflare-ai"  # Free built-in parser engine
                                },
                            }
                        ]
                    },
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
        messages: list[AIMessage],
    ) -> AsyncIterator[AIMessageChunk]:
        serialized = [x.serialize() for x in messages]
        async with LLM_SEMAPHORE:
            async for chunk in self.llm.astream(serialized):
                yield cast(AIMessageChunk, chunk)

    def n_tokens(
        self,
        messages: list[AIMessage],
    ) -> int:
        if not self._llm:
            raise UninitializedException("_llm")
        serialized = [x.serialize() for x in messages]
        try:
            return self._llm.get_num_tokens_from_messages(serialized)
        except (NotImplementedError, KeyError, ValueError):
            enc = tiktoken.get_encoding("cl100k_base")
            total_text = ""
            for msg in messages:
                for c in msg.content or []:
                    if not c.content_type and c.value:
                        total_text += c.value
            return len(enc.encode(total_text))

    async def stream(
        self,
        messages: list[AIMessage],
    ) -> AsyncIterator[str]:
        logger.info("...streaming LLM response %s" % self.name)
        is_started = False
        async for chunk in self._chunks(messages):
            if isinstance(chunk.content, str) and chunk.content:
                content = chunk.content
                if not is_started:
                    content = content.lstrip()
                    if not content:
                        continue
                    is_started = True
                yield content

    async def stream_prompt(
        self,
        prompt: str,
    ) -> AsyncIterator[str]:
        return self.stream([AIMessage(role=MessageRole.USER, text=prompt)])

    async def run(
        self,
        messages: list[AIMessage],
    ) -> AIMessage | None:
        result: AIMessageChunk | None = None
        async for chunk in self._chunks(messages):
            result = chunk if result is None else result + chunk
        if result is not None:
            return AIMessage.deserialize(result)
        return None


class Llm(_Llm): ...
