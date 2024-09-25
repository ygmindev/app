from abc import abstractmethod
from typing import Any, Self, Sequence, overload

from lib_ai.data.data_models import DataModel

type _ArrayDataSingleKeyModel = int

type _ArrayDataMultiKeyModel = Sequence[int] | slice


class _ArrayDataModel(DataModel):
    @overload
    @abstractmethod
    def __getitem__(self, _key: _ArrayDataSingleKeyModel) -> Self: ...

    @overload
    @abstractmethod
    def __getitem__(self, _key: _ArrayDataMultiKeyModel) -> Any: ...

    @abstractmethod
    def __len__(self) -> int: ...

    @classmethod
    def from_list(cls, _data: Sequence[Any]) -> Self: ...
