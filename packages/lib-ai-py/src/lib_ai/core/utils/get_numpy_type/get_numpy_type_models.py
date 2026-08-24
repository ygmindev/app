from typing import Protocol

from lib_shared.core.constants import DataType


class _GetNumpyTypeModel(Protocol):
    def __call__(
        self,
        params: DataType | None,
    ) -> type: ...


GetNumpyTypeModel = _GetNumpyTypeModel
