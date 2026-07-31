from typing import Self, Sequence

import numpy as np

type BaseDatasetKeyModel = int | slice | Sequence[int]


class BaseDatasetModel:
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
