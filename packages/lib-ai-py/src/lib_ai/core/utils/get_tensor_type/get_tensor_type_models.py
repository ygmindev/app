from typing import Protocol

import torch
from lib_shared.core.constants import DATA_TYPE


class _GetTensorTypeModel(Protocol):
    def __call__(
        self,
        params: DATA_TYPE | None,
    ) -> torch.dtype: ...


GetTensorTypeModel = _GetTensorTypeModel
