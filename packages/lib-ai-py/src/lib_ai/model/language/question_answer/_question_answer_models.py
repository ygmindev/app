from typing import NotRequired

from lib_ai.data.answer_data import AnswerData
from lib_ai.data.question_data import QuestionData
from lib_ai.model.language.base_language.base_language_models import (
    BaseLanguageEvalParamsModel,
    BaseLanguageFitParamsModel,
    BaseLanguageModel,
    BaseLanguageParamsModel,
    BaseLanguagePredParamsModel,
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


class _QuestionAnswerPredParamsModel(BaseLanguagePredParamsModel): ...


class _QuestionAnswerModel(
    BaseLanguageModel[
        _QuestionAnswerParamsModel,
        _QuestionAnswerFitParamsModel,
        _QuestionAnswerEvalParamsModel,
        _QuestionAnswerPredParamsModel,
        QuestionData,
        AnswerData,
    ],
): ...
