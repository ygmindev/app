import numpy as np
from lib_ai.core.utils.kfold import kfold


def test_works() -> None:
    result = list(kfold(n_rows=10, n_splits=5))
    folds = [
        [np.array([2, 3, 4, 5, 6, 7, 8, 9]), np.array([0, 1])],
        [np.array([0, 1, 4, 5, 6, 7, 8, 9]), np.array([2, 3])],
        [np.array([0, 1, 2, 3, 6, 7, 8, 9]), np.array([4, 5])],
        [np.array([0, 1, 2, 3, 4, 5, 8, 9]), np.array([6, 7])],
        [np.array([0, 1, 2, 3, 4, 5, 6, 7]), np.array([8, 9])],
    ]
    for v, f in zip(result, folds):
        assert np.array_equal(v[0], f[0])
        assert np.array_equal(v[1], f[1])
