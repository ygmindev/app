from lib_ai.model.language.base_language import BaseLanguage
from lib_ai.model.language.knowledge.knowledge_models import KnowledgeModel
from lib_ai.model.language.text_generation import TextGeneration


class Knowledge(
    TextGeneration,
    KnowledgeModel,
): ...
