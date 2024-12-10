from typing import List, TypedDict

from lib_ai.data.base_data.base_data_models import BaseDataModel


class TextOutputModel(TypedDict):
    content: str


type TextOutputDataTypeModel = List[TextOutputModel]


class TextOutputDataModel(BaseDataModel[TextOutputDataTypeModel]): ...
