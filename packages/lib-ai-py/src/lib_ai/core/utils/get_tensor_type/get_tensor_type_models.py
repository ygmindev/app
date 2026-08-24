from typing import Protocol

import torch
from lib_shared.core.constants import DataType


class _GetTensorTypeModel(Protocol):
    def __call__(
        self,
        params: DataType | None,
    ) -> torch.dtype: ...


GetTensorTypeModel = _GetTensorTypeModel
