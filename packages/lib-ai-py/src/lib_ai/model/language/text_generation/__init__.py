from lib_ai.model.language.base_language import BaseLanguage
from lib_ai.model.language.text_generation._text_generation import _TextGeneration
from lib_ai.model.language.text_generation.text_generation_models import (
    TextGenerationModel,
)


class TextGeneration(
    _TextGeneration,
    BaseLanguage,
    TextGenerationModel,
): ...
