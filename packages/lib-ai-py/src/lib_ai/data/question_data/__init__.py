from typing import Any, Self, Tuple, overload

import numpy as np
import torch
from lib_ai.data.base_data import BaseData
from lib_ai.data.question_data.question_data_models import (
    QuestionDataModel,
    QuestionDataTypeModel,
)
from lib_shared.core.core import DataType
from lib_shared.core.utils.indexable.indexable_models import (
    IndexableMultiKeyModel,
    IndexableSingleKeyModel,
)
from lib_shared.core.utils.is_listlike import is_listlike
from lib_shared.core.utils.not_implemented_exception import NotImplementedException


class QuestionData(
    BaseData,
    QuestionDataModel,
):
    def __init__(self, data: QuestionDataTypeModel) -> None:
        self._data = data

    @overload
    def __getitem__(self, key: IndexableSingleKeyModel) -> Self: ...

    @overload
    def __getitem__(self, key: IndexableMultiKeyModel) -> Any: ...

    def __getitem__(self, key: IndexableSingleKeyModel | IndexableMultiKeyModel) -> Self | Any:
        if is_listlike(key):
            return type(self)(data=[self.data[k] for k in key])
        return type(self)(data=self.data[key])

    def __len__(self) -> int:
        return len(self.data)

    def concat(self, other: Self) -> Self:
        return type(self)(data=self.data + other.data)

    @property
    def data(self) -> QuestionDataTypeModel:
        return self._data

    @data.setter
    def data(self, value: QuestionDataTypeModel) -> None:
        self._data = value

    def equals(self, other: Self) -> bool:
        return self.data == other.data

    def head(self, n_rows: int = 1) -> Self:
        return type(self)(data=self.data[:n_rows])

    @property
    def shape(self) -> Tuple[int, ...]:
        return (len(self.data),)

    def to_numpy(
        self,
        _dtype: DataType | None = DataType.FLOAT,
    ) -> np.ndarray:
        return np.array(self.data)

    def to_tensor(
        self,
        _dtype: DataType | None = DataType.STRING,
    ) -> torch.Tensor:
        raise NotImplementedException()
