from typing import List

from lib_ai.data.base_data.base_data_models import BaseDataModel

type TextDataTypeModel = List[str]


class TextDataModel(BaseDataModel[TextDataTypeModel]): ...
