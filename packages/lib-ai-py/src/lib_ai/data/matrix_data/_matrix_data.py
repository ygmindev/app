from typing import Any, Self, Sequence, Tuple, cast, overload

import numpy as np
import torch
from lib_ai.data.matrix_data._matrix_data_models import (
    _MatrixDataModel,
    _MatrixDataTypeModel,
)
from lib_ai.data.matrix_data.matrix_data_constants import MATRIX_DATA_TYPE
from lib_shared.core.utils.indexable.indexable_models import (
    IndexableMultiKeyModel,
    IndexableSingleKeyModel,
)
from lib_shared.core.utils.invalid_type_exception import InvalidTypeException
from numpy.typing import NDArray


class _MatrixData(_MatrixDataModel):
    def __init__(self, data: _MatrixDataTypeModel) -> None:
        self._data = data

    @overload
    def __getitem__(self, key: IndexableSingleKeyModel) -> Self: ...

    @overload
    def __getitem__(self, key: IndexableMultiKeyModel) -> Any: ...

    def __getitem__(self, key: IndexableSingleKeyModel | IndexableMultiKeyModel) -> Self | Any:
        result = self.data[key]
        if torch.is_tensor(result) or isinstance(result, np.ndarray):
            return type(self)(data=result)
        return result

    def __len__(self) -> int:
        return len(self.data)

    def concat(self, other: Self) -> Self:
        result = self.data
        match self.get_type():
            case MATRIX_DATA_TYPE.TENSOR:
                result = torch.concatenate([cast(torch.Tensor, result), other.to_tensor()])
            case MATRIX_DATA_TYPE.NUMPY:
                result = np.concatenate([result, other.to_numpy()], axis=0)
        return type(self)(data=result)

    @property
    def data(self) -> _MatrixDataTypeModel:
        return self._data

    @data.setter
    def data(self, value: _MatrixDataTypeModel) -> None:
        self._data = value

    @classmethod
    def from_array(
        cls,
        data: Sequence[Any],
        to: MATRIX_DATA_TYPE = MATRIX_DATA_TYPE.TENSOR,
    ) -> Self:
        result = None
        match to:
            case MATRIX_DATA_TYPE.TENSOR:
                result = torch.tensor(data)
            case MATRIX_DATA_TYPE.NUMPY:
                result = np.matrix(data)
        if result is None:
            raise InvalidTypeException()
        return cls(data=result)

    def get_type(self) -> MATRIX_DATA_TYPE:
        if torch.is_tensor(self.data):
            return MATRIX_DATA_TYPE.TENSOR
        if isinstance(self.data, np.ndarray):
            return MATRIX_DATA_TYPE.NUMPY
        raise InvalidTypeException()

    def head(self, n_rows: int = 1) -> Self:
        result = self.data
        match self.get_type():
            case MATRIX_DATA_TYPE.TENSOR:
                result = cast(torch.Tensor, result)[:n_rows]
            case MATRIX_DATA_TYPE.NUMPY:
                result = cast(NDArray, result)[:n_rows]
        return type(self)(data=result)

    @property
    def shape(self) -> Tuple[int, ...]:
        return self.data.shape

    def to_numpy(self) -> NDArray:
        match self.get_type():
            case MATRIX_DATA_TYPE.TENSOR:
                return cast(torch.Tensor, self.data).numpy()
            case MATRIX_DATA_TYPE.NUMPY:
                return cast(NDArray, self.data)
            case _:
                raise InvalidTypeException()

    def to_tensor(self) -> torch.Tensor:
        match self.get_type():
            case MATRIX_DATA_TYPE.TENSOR:
                return cast(torch.Tensor, self.data)
            case MATRIX_DATA_TYPE.NUMPY:
                return torch.tensor(self.data)
            case _:
                raise InvalidTypeException()
