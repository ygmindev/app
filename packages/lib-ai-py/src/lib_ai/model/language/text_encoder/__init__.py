from lib_ai.model.language.base_language import BaseLanguage
from lib_ai.model.language.text_encoder._text_encoder import _TextEncoder
from lib_ai.model.language.text_encoder.text_encoder_models import TextEncoderModel


class TextEncoder(
    _TextEncoder,
    BaseLanguage,
    TextEncoderModel,
): ...
