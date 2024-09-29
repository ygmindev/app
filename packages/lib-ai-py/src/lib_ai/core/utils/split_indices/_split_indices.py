from typing import Unpack

import numpy as np
from lib_ai.core.utils.split_indices._split_indices_models import (
    _SplitIndicesModel,
    _SplitIndicesParamsModel,
)
from sklearn.model_selection import train_test_split


def _split_indices(**params: Unpack[_SplitIndicesParamsModel]) -> _SplitIndicesModel:
    train, test = train_test_split(
        np.arange(params.get("nrows")),
        train_size=params.get("ratio"),
        shuffle=params.get("shuffle"),
        random_state=42,
        stratify=params.get("stratify"),
    )
    return train, test
