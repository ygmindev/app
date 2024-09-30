from typing import Unpack

import numpy as np
from lib_ai.core.utils.split_indices._split_indices_models import (
    _SplitIndicesModel,
    _SplitIndicesParamsModel,
)
from sklearn.model_selection import train_test_split


def _split_indices(**params: Unpack[_SplitIndicesParamsModel]) -> _SplitIndicesModel:
    train, test = train_test_split(
        np.arange(params.get("n_rows")),
        train_size=params.get("train_size"),
        shuffle=params.get("shuffle", False),
        random_state=42,
        stratify=params.get("stratify", None),
    )
    return train, test
