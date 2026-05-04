from lib_model.ai.llm_message.llm_message import LlmMessage
from lib_model.ai.llm_message.llm_message_constants import LlmMessageRole

y = LlmMessage(
    content="hello",
    role=LlmMessageRole.USER,
)
