import torch
from lib_shared.core.constants import DATA_TYPE

from lib_ai.core.utils.get_tensor_type.get_tensor_type_models import (
    GetTensorTypeModel,
)


def _get_tensor_type(
    params: DATA_TYPE | None,
) -> torch.dtype:
    match params:
        case DATA_TYPE.FLOAT:
            return torch.float
        case DATA_TYPE.INT:
            return torch.int
        case DATA_TYPE.LONG:
            return torch.long
        case _:
            return torch.float


get_tensor_type: GetTensorTypeModel = _get_tensor_type
