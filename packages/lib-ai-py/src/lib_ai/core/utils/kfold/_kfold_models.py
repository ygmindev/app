from typing import Any, Iterator, NotRequired, Sequence, Tuple, TypedDict

import numpy as np


class _KfoldParamsModel(TypedDict, total=False):
    is_shuffle: NotRequired[bool]
    n_rows: int
    n_splits: int
    random_state: int
    stratify: NotRequired[Sequence[Any]]


type _KfoldModel = Iterator[Tuple[np.ndarray, np.ndarray]]
