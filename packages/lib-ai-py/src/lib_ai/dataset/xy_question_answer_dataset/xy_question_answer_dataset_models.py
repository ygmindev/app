from lib_ai.data.answer_data import AnswerData
from lib_ai.data.question_data import QuestionData
from lib_ai.dataset.xy_dataset.xy_dataset_models import XYDatasetModel


class XYQuestionAnswerDatasetModel(XYDatasetModel[QuestionData, AnswerData]): ...
