from typing import List, NotRequired, TypedDict

from lib_ai.data.base_data.base_data_models import BaseDataModel


class QuestionAnswerModel(TypedDict):
    answer: NotRequired[str]
    question: str


class QuestionAnswerRowModel(TypedDict):
    context: NotRequired[str]
    questions: List[QuestionAnswerModel]


type QuestionAnswerDataTypeModel = List[QuestionAnswerRowModel]


class QuestionAnswerDataModel(BaseDataModel[QuestionAnswerDataTypeModel]): ...
