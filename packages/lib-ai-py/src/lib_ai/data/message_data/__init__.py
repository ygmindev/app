from typing import Self, Tuple

from lib_ai.data.base_data import BaseData
from lib_ai.data.message_data.message_data_models import (
    MessageDataModel,
    MessageDataTypeModel,
)


class MessageData(
    BaseData[MessageDataTypeModel],
    MessageDataModel,
):
    def concat(self, other: Self) -> Self:
        return type(self)(data=self.data + other.data)

    @property
    def shape(self) -> Tuple[int, ...]:
        return (len(self.data),)
