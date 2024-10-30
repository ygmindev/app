from __future__ import annotations

from abc import ABC, abstractmethod
from typing import Any, NotRequired, Self, Sequence, Tuple, TypedDict, Unpack

import torch
from lib_shared.core.utils.indexable.indexable_models import IndexableModel
from numpy.typing import NDArray


class SplitParamsModel(TypedDict):
    train_size: NotRequired[float]
    shuffle: NotRequired[bool]
    stratify: NotRequired[Sequence[Any]]


class BaseDataModel[T](IndexableModel, ABC):
    @abstractmethod
    def __init__(self, data: T) -> None: ...

    @abstractmethod
    def concat(self, other: Self) -> Self: ...

    @property
    @abstractmethod
    def data(self) -> T: ...

    @data.setter
    @abstractmethod
    def data(self, _value: T) -> None: ...

    @abstractmethod
    def equals(self, other: Self) -> bool: ...

    @abstractmethod
    def head(self, n_rows: int = 1) -> Self: ...

    @property
    @abstractmethod
    def shape(self) -> Tuple[int, ...]: ...

    @abstractmethod
    def split(self, **params: Unpack[SplitParamsModel]) -> Tuple[Self, Self]: ...

    @abstractmethod
    def to_numpy(self) -> NDArray: ...

    @abstractmethod
    def to_tensor(self) -> torch.Tensor: ...
