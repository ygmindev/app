# template version: 1.0.0


from datetime import datetime

from lib_shared.core.utils.base_model.base_model import BaseModel
from lib_shared.core.utils.field.field import Field

from lib_ai.agent.utils.ai_message.constants import MessageRole
from lib_ai.agent.utils.llm_payload.constants import LlmPayloadType


class LlmPayloadModel(BaseModel):
    chat_id: str = Field()
    created: datetime = Field(default_value=datetime.now)
    message_id: str = Field()
    role: MessageRole | None = Field(default=None)
    text: str | None = Field(default=None)
    type: LlmPayloadType = Field()
