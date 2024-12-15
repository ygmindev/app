from typing import Self, Tuple

from lib_ai.data.base_data import BaseData
from lib_ai.data.text_data.text_data_models import TextDataModel, TextDataTypeModel


class TextData(
    BaseData[TextDataTypeModel],
    TextDataModel,
):
    def concat(self, other: Self) -> Self:
        return type(self)(data=self.data + other.data)

    @property
    def shape(self) -> Tuple[int, ...]:
        return (len(self.data),)
