from abc import ABC, abstractmethod
from typing import Any, NotRequired, Self, Sequence, Tuple, TypedDict, Unpack

type BaseDataKeyModel = int | slice | Sequence[int]


class SplitParamsModel(TypedDict):
    train_size: NotRequired[float]
    shuffle: NotRequired[bool]
    stratify: NotRequired[Sequence[Any]]


class BaseDataModel(ABC):
    @abstractmethod
    def __add__(self, other: Self) -> Self: ...

    @abstractmethod
    def __getitem__(self, key: BaseDataKeyModel) -> Self: ...

    @abstractmethod
    def __len__(self) -> int: ...

    @abstractmethod
    def head(self, nrows: int = 1) -> Self: ...

    @abstractmethod
    def split(self, **params: Unpack[SplitParamsModel]) -> Tuple[Self, Self]: ...
