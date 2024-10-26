import numpy as np
from lib_ai.data.array_data import ArrayData

TABLE_1 = ArrayData.from_list([0, 1, 2, 3, 4])

TABLE_2 = ArrayData.from_list([5, 6, 7, 8, 9])


def test_concat() -> None:
    result = TABLE_1.concat(TABLE_2)
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
    result = TABLE_1[1]
    assert result == 1

    result = TABLE_1[[1, 2, 3]]
    assert np.array_equal(
        result.to_numpy(),
        np.array(
            [1, 2, 3],
            dtype=object,
        ),
    )

    result = TABLE_1[1:4]
    assert np.array_equal(
        result.to_numpy(),
        np.array(
            [1, 2, 3],
            dtype=object,
        ),
    )


def test_split() -> None:
    [train, test] = TABLE_1.split(train_size=0.8)
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
    assert len(TABLE_1) == 5
