from lib_ai.data.question_answer_data import QuestionAnswerData
from lib_ai.dataset.xy_dataset import XYDataset
from lib_ai.dataset.xy_question_answer_dataset.xy_question_answer_dataset_models import (
    XYQuestionAnswerDatasetModel,
)


class XYQuestionAnswerDataset(
    XYDataset[QuestionAnswerData, QuestionAnswerData],
    XYQuestionAnswerDatasetModel,
): ...
