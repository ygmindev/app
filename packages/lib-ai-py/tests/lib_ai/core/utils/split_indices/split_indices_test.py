import numpy as np
from lib_ai.core.utils.split_indices import split_indices


def test_works() -> None:
    N_ROWS = 10

    train, test = split_indices(n_rows=N_ROWS)
    assert (train == [0, 1, 2, 3, 4, 5, 6, 7]).all()
    assert (test == [8, 9]).all()

    train, test = split_indices(
        n_rows=N_ROWS,
        train_size=0.7,
    )
    assert (train == [0, 1, 2, 3, 4, 5, 6]).all()
    assert (test == [7, 8, 9]).all()

    train, test = split_indices(
        n_rows=N_ROWS,
        stratify=[1, 1, 1, 1, 1, 2, 2, 2, 2, 2],
    )
    assert len(test) == 2
    assert test[0] in np.arange(5)
    assert test[1] in np.arange(6, 10)
