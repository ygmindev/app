from abc import abstractmethod
from typing import Any, Self, Sequence

import numpy as np
import torch
from lib_ai.data.base_data.base_data_models import BaseDataModel
from lib_ai.data.matrix_data.matrix_data_constants import MatrixDataType

type _MatrixDataTypeModel = torch.Tensor | np.ndarray


class _MatrixDataModel(BaseDataModel[_MatrixDataTypeModel]):
    @classmethod
    @abstractmethod
    def from_array(
        cls,
        _data: Sequence[Any],
        _to: MatrixDataType = MatrixDataType.TENSOR,
    ) -> Self: ...

    @abstractmethod
    def get_type(self) -> MatrixDataType: ...
