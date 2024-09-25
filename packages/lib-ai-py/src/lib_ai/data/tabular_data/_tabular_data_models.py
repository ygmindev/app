from abc import abstractmethod
from typing import Any, Mapping, Self, Sequence, Tuple

import numpy as np
from lib_ai.data.data_models import DataModel

type _TabularDataSingleKeyModel = int

type _TabularDataMultiKeyModel = Sequence[int] | slice

type _TabularDataKeyModel = _TabularDataSingleKeyModel | _TabularDataMultiKeyModel | Tuple[
    _TabularDataSingleKeyModel, str
] | Tuple[_TabularDataMultiKeyModel, Sequence[str]]


class _TabularDataModel(DataModel):
    @abstractmethod
    def __getitem__(self, _key: _TabularDataKeyModel) -> Self: ...

    @classmethod
    def from_dict(cls, _data: Mapping[str, Sequence[Any]]) -> Self: ...

    @property
    @abstractmethod
    def shape(self) -> Tuple[int, int]: ...

    def to_numpy(self) -> np.ndarray: ...
