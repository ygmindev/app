from abc import abstractmethod
from typing import Any, Mapping, Self, Sequence, Tuple

from lib_ai.data.base_data.base_data_models import BaseDataModel

type _TabularDataSingleKeyModel = int

type _TabularDataMultiKeyModel = Sequence[int] | slice

type _TabularDataKeyModel = _TabularDataSingleKeyModel | _TabularDataMultiKeyModel | Tuple[
    _TabularDataSingleKeyModel, str
] | Tuple[_TabularDataMultiKeyModel, Sequence[str]]


class _TabularDataModel(BaseDataModel):
    @abstractmethod
    def __getitem__(self, _key: _TabularDataKeyModel) -> Self: ...

    @classmethod
    def from_dict(cls, _data: Mapping[str, Sequence[Any]]) -> Self: ...

    @property
    @abstractmethod
    def shape(self) -> Tuple[int, int]: ...
