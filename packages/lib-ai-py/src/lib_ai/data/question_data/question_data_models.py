from typing import List, NotRequired, TypedDict

from lib_ai.data.base_data.base_data_models import BaseDataModel


class QuestionModel(TypedDict):
    context: NotRequired[str]
    questions: List[str]


type QuestionDataTypeModel = List[QuestionModel]


class QuestionDataModel(BaseDataModel[QuestionDataTypeModel]): ...
