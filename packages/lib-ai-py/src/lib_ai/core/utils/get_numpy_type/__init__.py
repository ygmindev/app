import numpy as np
from lib_ai.core.utils.get_numpy_type.get_numpy_type_models import (
    GetNumpyTypeModel,
    GetNumpyTypeParamsModel,
)
from lib_shared.core.core import DATA_TYPE


def get_numpy_type(params: GetNumpyTypeParamsModel) -> GetNumpyTypeModel:
    match params:
        case DATA_TYPE.FLOAT:
            return np.float64
        case DATA_TYPE.INT:
            return np.int64
        case DATA_TYPE.LONG:
            return np.long
        case _:
            return np.float64
