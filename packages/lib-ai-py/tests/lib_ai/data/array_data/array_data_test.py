import numpy as np
from lib_ai.data.array_data import ArrayData
from lib_ai.data.array_data.array_data_fixtures import (
    ARRAY_DATA_FIXTURE_1,
    ARRAY_DATA_FIXTURE_2,
)


def test_concat() -> None:
    result = ARRAY_DATA_FIXTURE_1.concat(ARRAY_DATA_FIXTURE_2)
    assert np.array_equal(
        result.to_numpy(),
        np.array(
            [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
            dtype=object,
        ),
    )

    result = result.head(3)
    assert np.array_equal(
        result.to_numpy(),
        np.array(
            [0, 1, 2],
            dtype=object,
        ),
    )


def test_index() -> None:
    result = ARRAY_DATA_FIXTURE_1[1]
    assert result == 1

    result = ARRAY_DATA_FIXTURE_1[[1, 2, 3]]
    assert np.array_equal(
        result.to_numpy(),
        np.array(
            [1, 2, 3],
            dtype=object,
        ),
    )

    result = ARRAY_DATA_FIXTURE_1[1:4]
    assert np.array_equal(
        result.to_numpy(),
        np.array(
            [1, 2, 3],
            dtype=object,
        ),
    )


def test_split() -> None:
    [train, test] = ARRAY_DATA_FIXTURE_1.split(train_size=0.8)
    assert np.array_equal(
        train.to_numpy(),
        np.array(
            [0, 1, 2, 3],
            dtype=object,
        ),
    )

    assert np.array_equal(
        test.to_numpy(),
        np.array(
            [4],
            dtype=object,
        ),
    )


def test_shape() -> None:
    assert len(ARRAY_DATA_FIXTURE_1) == 5
