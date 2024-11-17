import torch
from lib_ai.core.utils.get_tensor_type.get_tensor_type_models import (
    GetTensorTypeModel,
    GetTensorTypeParamsModel,
)
from lib_shared.core.core import DataType


def get_tensor_type(params: GetTensorTypeParamsModel) -> GetTensorTypeModel:
    match params:
        case DataType.FLOAT:
            return torch.float
        case DataType.INT:
            return torch.int
        case DataType.LONG:
            return torch.long
        case _:
            return torch.float
