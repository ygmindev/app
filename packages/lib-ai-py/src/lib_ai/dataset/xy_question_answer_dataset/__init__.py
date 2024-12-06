from lib_ai.data.answer_data import AnswerData
from lib_ai.data.question_data import QuestionData
from lib_ai.dataset.xy_dataset import XYDataset
from lib_ai.dataset.xy_question_answer_dataset.xy_question_answer_dataset_models import (
    XYQuestionAnswerDatasetModel,
)


class XYQuestionAnswerDataset(
    XYDataset[QuestionData, AnswerData],
    XYQuestionAnswerDatasetModel,
): ...
