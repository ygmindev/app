from typing import List, NotRequired, TypedDict

from lib_ai.data.base_data.base_data_models import BaseDataModel


class AnswerInstanceModel(TypedDict):
    text: str
    start_index: NotRequired[int]


class AnswerModel(TypedDict):
    answers: List[AnswerInstanceModel]


type AnswerDataTypeModel = List[AnswerModel]


class AnswerDataModel(BaseDataModel[AnswerDataTypeModel]): ...
