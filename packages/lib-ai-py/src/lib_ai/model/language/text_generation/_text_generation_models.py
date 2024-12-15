from typing import List, NotRequired

from lib_ai.data.message_data import MessageData
from lib_ai.data.message_data.message_data_models import MessageModel
from lib_ai.model.language.base_language.base_language_models import (
    BaseLanguageEvalParamsModel,
    BaseLanguageFitParamsModel,
    BaseLanguageModel,
    BaseLanguageParamsModel,
    BaseLanguagePredParamsModel,
)
from lib_ai.model.language.text_generation.text_generation_constants import (
    TextGenerationKey,
)


class _TextGenerationParamsModel(BaseLanguageParamsModel):
    key: TextGenerationKey
    messages: NotRequired[List[MessageModel]]


class _TextGenerationFitParamsModel(BaseLanguageFitParamsModel): ...


class _TextGenerationEvalParamsModel(BaseLanguageEvalParamsModel): ...


class _TextGenerationPredParamsModel(BaseLanguagePredParamsModel):
    max_tokens: NotRequired[int]


class _TextGenerationModel(
    BaseLanguageModel[
        _TextGenerationParamsModel,
        _TextGenerationFitParamsModel,
        _TextGenerationEvalParamsModel,
        _TextGenerationPredParamsModel,
        MessageData,
        MessageData,
    ],
): ...
