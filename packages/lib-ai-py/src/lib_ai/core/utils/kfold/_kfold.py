from typing import Unpack

import numpy as np
from lib_ai.core.utils.kfold._kfold_models import _KfoldModel, _KfoldParamsModel
from lib_shared.core.utils.get_item import get_item
from sklearn.model_selection import KFold, StratifiedKFold


def _kfold(**params: Unpack[_KfoldParamsModel]) -> _KfoldModel:
    is_shuffle = get_item(params, "is_shuffle", False)
    n_rows = get_item(params, "n_rows")
    n_splits = get_item(params, "n_splits")
    random_state = get_item(params, "random_state") if is_shuffle else None
    stratify = get_item(params, "stratify", None)
    x = np.arange(n_rows)
    if stratify:
        kfold = StratifiedKFold(
            n_splits=n_splits,
            shuffle=is_shuffle,
            random_state=random_state,
        )
        return kfold.split(x, stratify)
    kfold = KFold(
        n_splits=n_splits,
        shuffle=is_shuffle,
        random_state=random_state,
    )
    return kfold.split(x)
