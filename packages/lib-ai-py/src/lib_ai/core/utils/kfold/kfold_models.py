from typing import Iterator, Protocol

import numpy as np
from lib_shared.core.utils.base_model.base_model import BaseModel


class KfoldParamsModel(BaseModel):
    n_splits: int
    n_rows: int | None = None
    random_state: int | None
    is_shuffle: bool = False
    stratify: np.ndarray | None = None


class _KfoldModel(Protocol):
    def __call__(
        self,
        params: KfoldParamsModel,
    ) -> Iterator[tuple[np.ndarray, np.ndarray]]: ...


KfoldModel = _KfoldModel
