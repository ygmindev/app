from typing import List, NotRequired, TypedDict

from lib_ai.data.base_data.base_data_models import BaseDataModel


class QAModel(TypedDict):
    answer: NotRequired[str]
    question: NotRequired[str]


class QARowModel(TypedDict):
    context: NotRequired[str]
    rows: List[QAModel]


type QuestionAnswerDataTypeModel = List[QARowModel]


class QuestionAnswerDataModel(BaseDataModel[QuestionAnswerDataTypeModel]): ...
