import torch
from lib_shared.core.constants import DataType


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


get_tensor_type = _get_tensor_type
