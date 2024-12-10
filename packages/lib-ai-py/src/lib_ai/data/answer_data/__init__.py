from typing import Tuple

from lib_ai.data.answer_data.answer_data_models import (
    AnswerDataModel,
    AnswerDataTypeModel,
)
from lib_ai.data.base_data import BaseData


class AnswerData(
    BaseData[AnswerDataTypeModel],
    AnswerDataModel,
):
    @property
    def shape(self) -> Tuple[int, ...]:
        return (len(self.data),)
