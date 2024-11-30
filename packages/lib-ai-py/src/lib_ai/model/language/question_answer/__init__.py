from lib_ai.data.matrix_data import MatrixData
from lib_ai.dataset.xy_matrix_dataset import XYMatrixDataset
from lib_ai.model.language.base_language import BaseLanguage
from lib_ai.model.language.question_answer._question_answer import _QuestionAnswer
from lib_ai.model.language.question_answer._question_answer_models import (
    _QuestionAnswerFitParamsModel,
)
from lib_ai.model.language.question_answer.question_answer_models import (
    QuestionAnswerModel,
)


class QuestionAnswer(
    _QuestionAnswer,
    BaseLanguage,
    QuestionAnswerModel,
): ...
