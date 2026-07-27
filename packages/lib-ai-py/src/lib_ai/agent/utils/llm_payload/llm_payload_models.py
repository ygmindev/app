# template version: 1.0.0


from datetime import datetime

from lib_shared.core.utils.base_model.base_model import BaseModel
from lib_shared.core.utils.field.field import Field

from lib_ai.agent.utils.ai_message.constants import MessageRole
from lib_ai.agent.utils.llm_payload.constants import LlmPayloadType


class LlmPayloadModel(BaseModel):
    chat_id: str = Field()
    content: str = Field()
    message_id: str = Field()
    type: LlmPayloadType = Field()
    role: MessageRole | None = Field(default=None)
    created: datetime = Field(default_value=datetime.now)
