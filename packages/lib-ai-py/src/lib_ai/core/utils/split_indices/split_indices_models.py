from typing import Protocol

import numpy as np


class SplitIndicesModel(Protocol):
    def __call__(
        self,
        n_rows: int,
        size: float = 0.8,
        is_shuffle: bool = False,
        stratify: np.ndarray | None = None,
        random_seed: int | None = None,
    ) -> tuple[list[int], list[int]]: ...
