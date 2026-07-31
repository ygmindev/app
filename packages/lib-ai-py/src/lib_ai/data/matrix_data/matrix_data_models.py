from typing import Any, Self, Sequence

import numpy as np
import torch

from lib_ai.data.base_data.base_data_models import BaseDataModel
from lib_ai.data.matrix_data.constants import MatrixDataType

type IndexableSingleKeyModel = int

type IndexableMultiKeyModel = Sequence[int] | slice | np.ndarray


class _MatrixDataModel(BaseDataModel[torch.Tensor | np.ndarray]):
    def __getitem__(
        self,
        key: IndexableSingleKeyModel | IndexableMultiKeyModel,
    ) -> Any | Self: ...

    @classmethod
    def from_array(
        cls,
        data: Sequence[Any],
        to: MatrixDataType = MatrixDataType.TENSOR,
    ) -> Self: ...

    @property
    def data_type(self) -> MatrixDataType: ...


class MatrixDataModel(_MatrixDataModel): ...
