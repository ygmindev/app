from typing import NotRequired

from lib_ai.dataset.xy_question_answer_dataset import XYQuestionAnswerDataset
from lib_ai.model.language.base_language.base_language_models import (
    BaseLanguageEvalParamsModel,
    BaseLanguageFitParamsModel,
    BaseLanguageModel,
    BaseLanguageParamsModel,
)
from lib_ai.model.language.question_answer.question_answer_constants import (
    QuestionAnswerKey,
)


class _QuestionAnswerParamsModel(BaseLanguageParamsModel):
    key: QuestionAnswerKey


class _QuestionAnswerFitParamsModel(BaseLanguageFitParamsModel):
    max_length: NotRequired[int]
    strie: NotRequired[int]


class _QuestionAnswerEvalParamsModel(BaseLanguageEvalParamsModel): ...


class _QuestionAnswerModel(
    BaseLanguageModel[
        _QuestionAnswerParamsModel,
        XYQuestionAnswerDataset,
        _QuestionAnswerFitParamsModel,
        _QuestionAnswerEvalParamsModel,
    ],
): ...
