import torch
from lib_ai.core.utils.get_tensor_type.get_tensor_type_models import (
    GetTensorTypeModel,
    GetTensorTypeParamsModel,
)
from lib_shared.core.core import DATA_TYPE


def get_tensor_type(params: GetTensorTypeParamsModel) -> GetTensorTypeModel:
    match params:
        case DATA_TYPE.FLOAT:
            return torch.float
        case DATA_TYPE.INT:
            return torch.int
        case DATA_TYPE.LONG:
            return torch.long
        case _:
            return torch.float
