import numpy as np
from lib_ai.data.tabular_data import TabularData

TABLE_1 = TabularData.from_dict(
    {
        "int": [0, 1, 2, 3, 4],
        "str": ["0", "1", "2", "3", "4"],
    }
)

TABLE_2 = TabularData.from_dict(
    {
        "int": [5, 6, 7, 8, 9],
        "str": ["5", "6", "7", "8", "9"],
    }
)


def test_add() -> None:
    result = TABLE_1 + TABLE_2
    assert np.array_equal(
        result.to_numpy(),
        np.array(
            [
                [0, "0"],
                [1, "1"],
                [2, "2"],
                [3, "3"],
                [4, "4"],
                [5, "5"],
                [6, "6"],
                [7, "7"],
                [8, "8"],
                [9, "9"],
            ],
            dtype=object,
        ),
    )

    result = result.head(3)
    assert np.array_equal(
        result.to_numpy(),
        np.array(
            [
                [0, "0"],
                [1, "1"],
                [2, "2"],
            ],
            dtype=object,
        ),
    )


def test_index() -> None:
    result = TABLE_1[1]
    assert np.array_equal(
        result.to_numpy(),
        np.array(
            [
                [1, "1"],
            ],
            dtype=object,
        ),
    )

    result = TABLE_1[[1, 2, 3]]
    assert np.array_equal(
        result.to_numpy(),
        np.array(
            [
                [1, "1"],
                [2, "2"],
                [3, "3"],
            ],
            dtype=object,
        ),
    )

    result = TABLE_1[1:4]
    assert np.array_equal(
        result.to_numpy(),
        np.array(
            [
                [1, "1"],
                [2, "2"],
                [3, "3"],
            ],
            dtype=object,
        ),
    )


def test_split() -> None:
    [train, test] = TABLE_1.split(train_size=0.8)
    assert np.array_equal(
        train.to_numpy(),
        np.array(
            [
                [0, "0"],
                [1, "1"],
                [2, "2"],
                [3, "3"],
            ],
            dtype=object,
        ),
    )

    assert np.array_equal(
        test.to_numpy(),
        np.array(
            [
                [4, "4"],
            ],
            dtype=object,
        ),
    )


def test_shape() -> None:
    assert TABLE_1.shape == (5, 2)
