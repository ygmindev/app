from typing import Protocol

from lib_shared.core.constants import DATA_TYPE


class _GetNumpyTypeModel(Protocol):
    def __call__(
        self,
        params: DATA_TYPE | None,
    ) -> type: ...


GetNumpyTypeModel = _GetNumpyTypeModel
