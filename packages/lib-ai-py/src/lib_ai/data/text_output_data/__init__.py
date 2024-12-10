from typing import Self, Tuple

from lib_ai.data.base_data import BaseData
from lib_ai.data.text_output_data.text_output_data_models import (
    TextOutputDataModel,
    TextOutputDataTypeModel,
)


class TextOutputData(
    BaseData[TextOutputDataTypeModel],
    TextOutputDataModel,
):
    def concat(self, other: Self) -> Self:
        return type(self)(data=self.data + other.data)

    @property
    def shape(self) -> Tuple[int, ...]:
        return (len(self.data),)
