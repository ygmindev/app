# template version: 1.0.0
from typing import Self

from langchain_core.messages import BaseMessage


class _LlmMessageModel:
    def serialize(self) -> BaseMessage: ...

    @classmethod
    def deserialize(
        cls,
        message: BaseMessage,
    ) -> Self: ...


class LlmMessageModel(_LlmMessageModel): ...
