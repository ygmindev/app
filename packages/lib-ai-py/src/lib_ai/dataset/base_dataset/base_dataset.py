from typing import Self, Sequence

import numpy as np
from lib_shared.core.utils.base_model.base_model import BaseModel

type BaseDatasetKeyModel = int | slice | Sequence[int]


class BaseDataset(BaseModel):
    def head(
        self,
        n_rows: int = 1,
    ) -> Self: ...

    def split(
        self,
        size: float = 0.8,
        is_shuffle: bool = False,
        stratify: np.ndarray | None = None,
        random_seed: int | None = None,
    ) -> tuple[Self, Self]: ...
