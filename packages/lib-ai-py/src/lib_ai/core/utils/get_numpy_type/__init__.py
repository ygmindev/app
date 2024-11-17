import numpy as np
from lib_ai.core.utils.get_numpy_type.get_numpy_type_models import (
    GetNumpyTypeModel,
    GetNumpyTypeParamsModel,
)
from lib_shared.core.core import DataType


def get_numpy_type(params: GetNumpyTypeParamsModel) -> GetNumpyTypeModel:
    match params:
        case DataType.FLOAT:
            return np.float64
        case DataType.INT:
            return np.int64
        case DataType.LONG:
            return np.long
        case _:
            return np.float64
