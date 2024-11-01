import numpy as np
from lib_ai.data.tabular_data.tabular_data_fixtures import (
    TABULAR_DATA_FIXTURE_1,
    TABULAR_DATA_FIXTURE_2,
)


def test_concat() -> None:
    result = TABULAR_DATA_FIXTURE_1.concat(TABULAR_DATA_FIXTURE_2)
    assert np.array_equal(
        result.to_numpy(),
        np.array(
            [
                [0, "a"],
                [1, "b"],
                [2, "c"],
                [3, "d"],
                [4, "e"],
                [5, "f"],
                [6, "g"],
                [7, "h"],
                [8, "i"],
                [9, "j"],
            ],
            dtype=object,
        ),
    )

    result = result.head(3)
    assert np.array_equal(
        result.to_numpy(),
        np.array(
            [
                [0, "a"],
                [1, "b"],
                [2, "c"],
            ],
            dtype=object,
        ),
    )


def test_index() -> None:
    result = TABULAR_DATA_FIXTURE_1[1]
    assert np.array_equal(
        result.to_numpy(),
        np.array(
            [
                [1, "b"],
            ],
            dtype=object,
        ),
    )

    result = TABULAR_DATA_FIXTURE_1[[1, 2, 3]]
    assert np.array_equal(
        result.to_numpy(),
        np.array(
            [
                [1, "b"],
                [2, "c"],
                [3, "d"],
            ],
            dtype=object,
        ),
    )

    result = TABULAR_DATA_FIXTURE_1[1:4]
    assert np.array_equal(
        result.to_numpy(),
        np.array(
            [
                [1, "b"],
                [2, "c"],
                [3, "d"],
            ],
            dtype=object,
        ),
    )


def test_split() -> None:
    [train, test] = TABULAR_DATA_FIXTURE_1.split(train_size=0.8)
    assert np.array_equal(
        train.to_numpy(),
        np.array(
            [
                [0, "a"],
                [1, "b"],
                [2, "c"],
                [3, "d"],
            ],
            dtype=object,
        ),
    )

    assert np.array_equal(
        test.to_numpy(),
        np.array(
            [
                [4, "e"],
            ],
            dtype=object,
        ),
    )


def test_shape() -> None:
    assert TABULAR_DATA_FIXTURE_1.shape == (5, 2)
