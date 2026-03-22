from lib_ai.model.language.base_language import BaseLanguage
from lib_ai.model.language.text_embedding._text_embedding import _TextEmbedding
from lib_ai.model.language.text_embedding.text_embedding_models import (
    TextEmbeddingModel,
)


class TextEmbedding(
    _TextEmbedding,
    BaseLanguage,
    TextEmbeddingModel,
): ...
