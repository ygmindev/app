from enum import StrEnum
from typing import List, NotRequired, TypedDict

from lib_ai.data.base_data.base_data_models import BaseDataModel


class MessageRole(StrEnum):
    USER = "user"
    SYSTEM = "system"


class MessageModel(TypedDict):
    content: str
    role: NotRequired[MessageRole]


type MessageDataTypeModel = List[List[MessageModel]]


class MessageDataModel(BaseDataModel[MessageDataTypeModel]): ...
