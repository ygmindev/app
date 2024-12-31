from typing import Any, Self, Sequence, Tuple, cast

import numpy as np
import torch
from lib_ai.core.utils.get_device import get_device
from lib_ai.core.utils.get_numpy_type import get_numpy_type
from lib_ai.core.utils.get_tensor_type import get_tensor_type
from lib_ai.data.matrix_data._matrix_data_models import _MatrixDataModel
from lib_ai.data.matrix_data.matrix_data_constants import MatrixDataType
from lib_shared.core.core import DataType
from lib_shared.core.utils.invalid_type_exception import InvalidTypeException


class _MatrixData(_MatrixDataModel):
    def concat(self, other: Self) -> Self:
        result = self.data
        match self.get_type():
            case MatrixDataType.TENSOR:
                result = torch.concatenate([cast(torch.Tensor, result), other.to_tensor()])
            case MatrixDataType.NUMPY:
                result = np.concatenate([result, other.to_numpy()], axis=0)
        return type(self)(data=result)

    @classmethod
    def from_array(
        cls,
        data: Sequence[Any],
        to: MatrixDataType = MatrixDataType.TENSOR,
    ) -> Self:
        result = None
        match to:
            case MatrixDataType.TENSOR:
                result = torch.tensor(data)
            case MatrixDataType.NUMPY:
                result = np.matrix(data)
        if result is None:
            raise InvalidTypeException()
        return cls(data=result)

    def equals(self, other: Self) -> bool:
        match self.get_type():
            case MatrixDataType.TENSOR:
                return self.to_tensor().equal(other.to_tensor())
            case MatrixDataType.NUMPY:
                return np.array_equal(self.to_numpy(), other.to_numpy())
        raise InvalidTypeException()

    def get_type(self) -> MatrixDataType:
        if torch.is_tensor(self.data):
            return MatrixDataType.TENSOR
        if isinstance(self.data, np.ndarray):
            return MatrixDataType.NUMPY
        raise InvalidTypeException()

    def head(self, n_rows: int = 1) -> Self:
        match self.get_type():
            case MatrixDataType.TENSOR:
                result = self.to_tensor()[:n_rows]
            case MatrixDataType.NUMPY:
                result = self.to_numpy()[:n_rows]
            case _:
                raise InvalidTypeException()
        return type(self)(data=result)

    @property
    def shape(self) -> Tuple[int, ...]:
        return self.data.shape

    def to_numpy(
        self,
        dtype: DataType | None = DataType.FLOAT,
    ) -> np.ndarray:
        to_type = get_numpy_type(dtype)
        match self.get_type():
            case MatrixDataType.TENSOR:
                return cast(torch.Tensor, self.data).numpy().astype(to_type)
            case MatrixDataType.NUMPY:
                return cast(np.ndarray, self.data).astype(to_type)
            case _:
                raise InvalidTypeException()

    def to_tensor(
        self,
        dtype: DataType | None = DataType.FLOAT,
    ) -> torch.Tensor:
        to_type = get_tensor_type(dtype)
        device = get_device()
        match self.get_type():
            case MatrixDataType.TENSOR:
                return cast(torch.Tensor, self.data).to(to_type).to(device)
            case MatrixDataType.NUMPY:
                return torch.tensor(self.data).to(to_type).to(device)
            case _:
                raise InvalidTypeException()
