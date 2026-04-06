# template version: 1.0.0
from typing import Generic, Self, TypeVar

from langchain_core.messages import BaseMessage

TType = TypeVar("TType", default=str)


class _LlmMessageModel(Generic[TType]):
    def serialize(self) -> BaseMessage: ...

    @classmethod
    def deserialize(
        cls,
        message: BaseMessage,
    ) -> Self: ...


class LlmMessageModel(_LlmMessageModel): ...
