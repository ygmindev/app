import torch
from lib_shared.core.constants import DataType

from lib_ai.core.utils.get_tensor_type.get_tensor_type_models import (
    GetTensorTypeModel,
)


def _get_tensor_type(
    params: DataType | None,
) -> torch.dtype:
    match params:
        case DataType.FLOAT:
            return torch.float
        case DataType.INT:
            return torch.int
        case DataType.LONG:
            return torch.long
        case _:
            return torch.float


get_tensor_type: GetTensorTypeModel = _get_tensor_type
