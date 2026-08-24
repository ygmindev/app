import numpy as np
from lib_shared.core.constants import DataType

from lib_ai.core.utils.get_numpy_type.get_numpy_type_models import (
    GetNumpyTypeModel,
)


def _get_numpy_type(
    params: DataType | None,
) -> type:
    match params:
        case DataType.FLOAT:
            return np.float64
        case DataType.INT:
            return np.int64
        case DataType.LONG:
            return np.long
        case _:
            return np.float64


get_numpy_type: GetNumpyTypeModel = _get_numpy_type
