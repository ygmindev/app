# template version: 1.0.0

import asyncio
import contextlib
from typing import Any, AsyncIterator, cast

import httpx
import tiktoken
from langchain_core.language_models.chat_models import BaseChatModel
from langchain_core.messages import AIMessageChunk
from langchain_openai import ChatOpenAI
from lib_shared.core.utils.base_model.base_model import BaseModel
from lib_shared.core.utils.field.field import Field
from lib_shared.core.utils.get_env.get_env import get_env
from lib_shared.core.utils.logger.logger import logger
from lib_shared.core.utils.private_field.private_field import PrivateField

from lib_ai.agent.utils.ai_message.ai_message import AIMessage
from lib_ai.agent.utils.ai_message.constants import MessageRole
from lib_ai.agent.utils.tool import Tool
from lib_ai.model.llm.constants import LLM_NAME, LLM_PROVIDER

LLM_SEMAPHORE = asyncio.Semaphore(4)


class LlmChunk(BaseModel):
    delta: str | None = Field(default=None)
    message: AIMessage | None = Field(default=None)


class _Llm(BaseModel):
    provider: str = Field(default=LLM_PROVIDER.OPENROUTER)
    name: str = Field(default=LLM_NAME.NEMOTRON_3_5_LIGHTNING)
    temperature: float = Field(default=0.0)
    max_tokens: int = Field(default=4096)
    output_schema: type[BaseModel] | BaseModel | None = Field(default=None)
    secrets: dict[str, str] = Field(default_factory=dict)

    _http_client: httpx.AsyncClient | None = PrivateField(default=None)
    _llm: BaseChatModel | None = PrivateField(default=None)

    def _secret(self, provider: str) -> str:
        if provider in self.secrets:
            return self.secrets[provider]
        env_key = {
            LLM_PROVIDER.OPENROUTER: "OPENROUTER_SECRET",
            LLM_PROVIDER.LITELLM: "LITELLM_SECRET",
        }.get(provider)
        if env_key:
            return get_env(env_key) or ""
        return ""

    def model_post_init(self, __context: Any) -> None:
        if self._llm is not None:
            return
        self._http_client = httpx.AsyncClient(verify=True)

        name = LLM_PROVIDER_MODEL[self.provider][self.name]

        match self.provider:
            case LLM_PROVIDER.LMSTUDIO:
                self._llm = ChatOpenAI(
                    api_key="lmstudio",
                    base_url="http://localhost:1234/v1",
                    model=name,
                    temperature=self.temperature,
                    max_completion_tokens=self.max_tokens,
                    extra_body={"chat_template_kwargs": {"enable_thinking": False}},
                    http_async_client=self._http_client,
                )
            case LLM_PROVIDER.OPENROUTER:
                self._llm = ChatOpenAI(
                    api_key=self._secret(LLM_PROVIDER.OPENROUTER),
                    base_url="https://openrouter.ai/api/v1",
                    model=name,
                    temperature=self.temperature,
                    max_completion_tokens=self.max_tokens,
                    http_async_client=self._http_client,
                )
            case LLM_PROVIDER.LITELLM:
                self._llm = ChatOpenAI(
                    api_key=self._secret(LLM_PROVIDER.LITELLM),
                    base_url=get_env("LITELLM_PROXY_URL"),
                    model=name,
                    temperature=self.temperature,
                    max_completion_tokens=self.max_tokens,
                    http_async_client=self._http_client,
                )

    async def aclose(self) -> None:
        if self._http_client is not None:
            await self._http_client.aclose()
            self._http_client = None

    @property
    def llm(self) -> BaseChatModel:
        if not self._llm:
            raise ValueError("_llm")
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
        async with contextlib.aclosing(self.llm.astream(serialized)) as stream:
            async for chunk in stream:
                yield cast(AIMessageChunk, chunk)

    def n_tokens(
        self,
        messages: list[AIMessage],
    ) -> int:
        if not self._llm:
            raise ValueError("_llm")
        serialized = [x.serialize() for x in messages]
        try:
            return self._llm.get_num_tokens_from_messages(serialized)
        except (NotImplementedError, KeyError, ValueError):
            enc = tiktoken.get_encoding("cl100k_base")
            total_text = ""
            for msg in messages:
                if msg.text:
                    total_text += msg.text
                for c in msg.content or []:
                    if not c.content_type and c.value:
                        total_text += c.value
            return len(enc.encode(total_text))

    def _chunk_text(self, chunk: AIMessageChunk) -> str:
        content = chunk.content
        if isinstance(content, str):
            return content
        if isinstance(content, list):
            parts: list[str] = []
            for item in content:
                if isinstance(item, str):
                    parts.append(item)
                elif isinstance(item, dict) and item.get("type") == "text":
                    parts.append(str(item.get("text") or ""))
            return "".join(parts)
        return ""

    async def stream(
        self,
        messages: list[AIMessage],
    ) -> AsyncIterator[LlmChunk]:
        logger.info("llm.stream model=%s", self.name)
        assembled: AIMessageChunk | None = None
        is_started = False
        async for chunk in self._chunks(messages):
            assembled = chunk if assembled is None else assembled + chunk
            text = self._chunk_text(chunk)
            if text:
                if not is_started:
                    text = text.lstrip()
                    if not text:
                        continue
                    is_started = True
                yield LlmChunk(delta=text)
        if assembled is not None:
            yield LlmChunk(message=AIMessage.deserialize(assembled))

    async def stream_prompt(
        self,
        prompt: str,
    ) -> AsyncIterator[LlmChunk]:
        async for chunk in self.stream([AIMessage(role=MessageRole.USER, text=prompt)]):
            yield chunk

    async def run(
        self,
        messages: list[AIMessage],
    ) -> AIMessage | None:
        logger.info("llm.run model=%s", self.name)
        serialized = [x.serialize() for x in messages]
        result = await self.llm.ainvoke(serialized)
        if result is not None:
            return AIMessage.deserialize(result)
        return None


class Llm(_Llm): ...
