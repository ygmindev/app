from abc import ABC, abstractmethod
from typing import Any, NotRequired, Self, Sequence, Tuple, TypedDict, Unpack

import numpy as np
import torch
from lib_shared.core.utils.indexable.indexable_models import IndexableModel


class SplitParamsModel(TypedDict):
    train_size: NotRequired[float]
    shuffle: NotRequired[bool]
    stratify: NotRequired[Sequence[Any]]


class BaseDataModel(IndexableModel, ABC):
    @abstractmethod
    def __add__(self, other: Self) -> Self: ...

    @abstractmethod
    def concat(self, other: Self) -> Self: ...

    @abstractmethod
    def head(self, n_rows: int = 1) -> Self: ...

    @abstractmethod
    def split(self, **params: Unpack[SplitParamsModel]) -> Tuple[Self, Self]: ...

    @abstractmethod
    def to_numpy(self) -> np.ndarray: ...

    @abstractmethod
    def to_tensor(self) -> torch.Tensor: ...
