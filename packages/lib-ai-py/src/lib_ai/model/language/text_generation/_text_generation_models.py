from typing import NotRequired, Sequence

from lib_ai.data.message_data import MessageData
from lib_ai.dataset.xy_chat_dataset import XYChatDataset
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
    messages: NotRequired[MessageData]


class _TextGenerationFitParamsModel(BaseLanguageFitParamsModel): ...


class _TextGenerationEvalParamsModel(BaseLanguageEvalParamsModel): ...


class _TextGenerationPredParamsModel(BaseLanguagePredParamsModel):
    max_tokens: NotRequired[int]


class _TextGenerationModel(
    BaseLanguageModel[
        _TextGenerationParamsModel,
        XYChatDataset,
        _TextGenerationFitParamsModel,
        _TextGenerationEvalParamsModel,
        _TextGenerationPredParamsModel,
    ],
): ...
