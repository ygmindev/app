from lib_ai.data.message_data.message_data_models import MessageRole
from lib_ai.model.language.base_language import BaseLanguage
from lib_ai.model.language.knowledge.knowledge_models import (
    KnowledgeModel,
    KnowledgeParamsModel,
)
from lib_ai.model.language.text_generation import TextGeneration
from lib_shared.core.utils.get_item import get_item


class Knowledge(
    TextGeneration,
    KnowledgeModel,
):
    def __init__(self, params: KnowledgeParamsModel) -> None:
        params["messages"] = [
            *get_item(params, "messages", []),
            {
                "content": """
                    You are a helpful assistant.

                    - Only use information available on Wikipedia
                    - You must answer the question directly, without speculation
                    - If you are not confident in your answer, begin your response with "Unsure".
                """,
                "role": MessageRole.SYSTEM,
            },
        ]
        super().__init__(params)
