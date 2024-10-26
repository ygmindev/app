from abc import abstractmethod
from typing import Any, Self, Sequence

import torch
from lib_ai.data.base_data.base_data_models import BaseDataModel
from lib_ai.data.matrix_data.matrix_data_constants import MATRIX_DATA_TYPE
from numpy.typing import NDArray

type _MatrixDataTypeModel = torch.Tensor | NDArray


class _MatrixDataModel(BaseDataModel[_MatrixDataTypeModel]):
    @classmethod
    @abstractmethod
    def from_array(
        cls,
        _data: Sequence[Any],
        _to: MATRIX_DATA_TYPE = MATRIX_DATA_TYPE.TENSOR,
    ) -> Self: ...

    @abstractmethod
    def get_type(self) -> MATRIX_DATA_TYPE: ...
