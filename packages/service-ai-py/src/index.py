from lib_model.ai.llm_message.llm_message import LlmMessage
from lib_model.ai.llm_message.llm_message_constants import LlmMessageRole

y = LlmMessage(
    content="hello",
    role=LlmMessageRole.USER,
)

print("\n\n@@Y:\n", y)


# schema = strawberry.Schema(x)
# print("\n\n@@SCHEMA:\n", schema.as_str())
