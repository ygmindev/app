from abc import abstractmethod
from typing import Any, Mapping, Self, Sequence, Tuple, Union

import numpy as np
from lib_ai.data.data_models import DataModel


class _TabularDataModel(DataModel):
    @abstractmethod
    def __getitem__(self, _key: Union[str, Sequence[str]]) -> Self: ...

    @classmethod
    def from_dict(cls, _data: Mapping[str, Sequence[Any]]) -> Self: ...

    @property
    @abstractmethod
    def shape(self) -> Tuple[int, int]: ...

    def to_numpy(self) -> np.ndarray: ...
