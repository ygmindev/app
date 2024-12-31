from typing import Unpack

import numpy as np
from lib_ai.core.utils.batch.batch_models import BatchModel, BatchParamsModel
from lib_shared.core.utils.get_item import get_item


def batch[T](**params: Unpack[BatchParamsModel[T]]) -> BatchModel[T]:
    data = get_item(params, "data")
    n_samples = len(data)
    batch_size = get_item(params, "batch_size", n_samples / 5)
    is_shuffle = get_item(params, "is_shuffle", False)

    indices = np.arange(n_samples)
    if is_shuffle:
        np.random.shuffle(indices)

    for start in range(0, n_samples, batch_size):
        end = min(start + batch_size, n_samples)
        idx = indices[start:end]
        yield data[idx]
