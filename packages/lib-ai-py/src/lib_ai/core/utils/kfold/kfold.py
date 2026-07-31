from typing import Iterator

import numpy as np
from lib_shared.core.errors.invalid_argument_error import InvalidArgumentError
from sklearn.model_selection import KFold, StratifiedKFold

from lib_ai.core.utils.kfold.kfold_models import KfoldModel, KfoldParamsModel


def _kfold(
    params: KfoldParamsModel,
) -> Iterator[tuple[np.ndarray, np.ndarray]]:
    if not params.n_rows:
        raise InvalidArgumentError("n_rows is required")
    x = np.arange(params.n_rows)
    if params.stratify:
        fold = StratifiedKFold(
            n_splits=params.n_splits,
            shuffle=params.is_shuffle,
            random_state=params.random_state,
        )
        return fold.split(x, params.stratify)
    fold = KFold(
        n_splits=params.n_splits,
        shuffle=params.is_shuffle,
        random_state=params.random_state,
    )
    return fold.split(x)


kfold: KfoldModel = _kfold
