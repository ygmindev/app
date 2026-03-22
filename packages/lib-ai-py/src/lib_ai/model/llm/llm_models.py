# template version: 1.0.0


from enum import Enum
from typing import Iterator

from lib_shared.core.utils.base_model import BaseModel

from lib_ai.model.llm.constants import LLM_MESSAGE_TYPE


class LlmMessage(BaseModel):
    message: str
    type: LLM_MESSAGE_TYPE


class LLM_OUTPUT_TYPE(Enum):
    MESSAGE = "message"
    THOUGHT = "thought"
    TOOL_CALL = "tool_call"


class LlmOutput(BaseModel):
    message: str
    type: LLM_OUTPUT_TYPE = LLM_OUTPUT_TYPE.MESSAGE


class _LlmModel:
    async def invoke(
        self,
        messages: list[LlmMessage],
    ) -> LlmOutput: ...

    async def stream(
        self,
        messages: list[LlmMessage],
    ) -> Iterator[LlmOutput]: ...


class LlmModel(_LlmModel): ...
