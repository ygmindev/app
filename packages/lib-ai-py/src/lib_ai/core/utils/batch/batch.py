from typing import Generator

import numpy as np
from lib_shared.core.utils.indexable.indexable_models import IndexableModel

from .batch_models import BatchModel


def _batch[TType](
    data: IndexableModel[TType],
    batch_size: int,
    is_shuffle: bool = False,
) -> Generator[TType, TType, TType]:
    n_samples = len(data)
    indices = np.arange(n_samples)
    if is_shuffle:
        np.random.shuffle(indices)

    for start in range(0, n_samples, batch_size):
        end = min(start + batch_size, n_samples)
        idx = indices[start:end]
        yield data[idx]


batch: BatchModel = _batch
