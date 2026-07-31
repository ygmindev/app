import numpy as np
from sklearn.model_selection import train_test_split

from lib_ai.core.utils.split_indices.split_indices_models import (
    SplitIndicesModel,
)


def _split_indices(
    n_rows: int,
    size: float = 0.8,
    is_shuffle: bool = False,
    stratify: np.ndarray | None = None,
    random_seed: int | None = None,
) -> tuple[list[int], list[int]]:
    train, test = train_test_split(
        np.arange(n_rows),
        train_size=size,
        shuffle=is_shuffle,
        random_state=random_seed,
        stratify=stratify,
    )
    return train, test


split_indices: SplitIndicesModel = _split_indices
