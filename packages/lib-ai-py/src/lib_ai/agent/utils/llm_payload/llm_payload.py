# template version: 1.0.0


from typing import Optional

from lib_model.chat.message.constants import MessageRole
from lib_shared.core.utils.base_model.base_model import BaseModel
from lib_shared.core.utils.field.field import Field

from lib_ai.agent.utils.llm_payload.constants import LlmPayloadType

from .llm_payload_models import LlmPayloadModel


class LlmPayload(LlmPayloadModel, BaseModel):
    chat_id: str = Field()
    content: str = Field()
    message_id: str = Field()
    type: LlmPayloadType = Field()
    role: Optional[MessageRole] = Field(default=None)
