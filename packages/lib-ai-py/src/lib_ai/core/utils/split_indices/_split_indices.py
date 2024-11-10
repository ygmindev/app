from typing import Unpack

import numpy as np
from lib_ai.core.utils.split_indices._split_indices_models import (
    _SplitIndicesModel,
    _SplitIndicesParamsModel,
)
from lib_shared.core.utils.get_item import get_item
from sklearn.model_selection import train_test_split


def _split_indices(**params: Unpack[_SplitIndicesParamsModel]) -> _SplitIndicesModel:
    n_rows = get_item(params, "n_rows")
    train_size = get_item(params, "train_size", 0.8)
    shuffle = get_item(params, "shuffle", False)
    stratify = get_item(params, "stratify", None)
    train, test = train_test_split(
        np.arange(n_rows),
        train_size=train_size,
        shuffle=shuffle,
        random_state=42,
        stratify=stratify,
    )
    return train, test
