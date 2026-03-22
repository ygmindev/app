# template version: 1.0.0


from typing import Iterator, Optional

from langchain_core.language_models import LanguageModelInput
from langchain_core.language_models.chat_models import BaseChatModel
from langchain_core.messages import HumanMessage, SystemMessage
from langchain_ollama import ChatOllama
from lib_shared.core.utils.base_model import BaseModel
from lib_shared.core.utils.uninitialized_exception import UninitializedException

from lib_ai.model.llm.constants import LLM_MESSAGE_TYPE, LLM_NAME

from .llm_models import (
    LlmMessage,
    LlmModel,
    LlmOutput,
    _LlmModel,
)


class _Llm(BaseModel, _LlmModel):
    name: str = LLM_NAME.GLM_5
    temperature: float = 0.0
    max_tokens: int = 4096

    _llm: Optional[BaseChatModel] = None

    def post_init(self) -> None:
        match self.name:
            case LLM_NAME.GLM_5:
                self._llm = ChatOllama(
                    model="glm-5:cloud",
                    temperature=self.temperature,
                    num_predict=self.max_tokens,
                )

    def _messages(
        self,
        messages: list[LlmMessage],
    ) -> LanguageModelInput:
        return list(
            map(
                lambda x: (
                    SystemMessage(content=x.message)
                    if x.type == LLM_MESSAGE_TYPE.SYSTEM
                    else HumanMessage(content=x.message)
                ),
                messages,
            )
        )

    async def invoke(
        self,
        messages: list[LlmMessage],
    ) -> LlmOutput:
        if not self._llm:
            raise UninitializedException("_llm")

        result = await self._llm.ainvoke(self._messages(messages))
        return LlmOutput(message=str(result.content))

    async def stream(
        self,
        messages: list[LlmMessage],
    ) -> Iterator[LlmOutput]:
        if not self._llm:
            raise UninitializedException("_llm")

        return map(
            lambda x: LlmOutput(message=str(x.content)),
            self._llm.stream(self._messages(messages)),
        )


class Llm(_Llm, LlmModel): ...
