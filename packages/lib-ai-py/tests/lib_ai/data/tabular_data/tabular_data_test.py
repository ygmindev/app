import numpy as np
from lib_ai.data.tabular_data import TabularData

TABLE_1 = TabularData.from_dict(
    {
        "a": [0, 1, 2, 3, 4],
        "b": [5, 6, 7, 8, 9],
    }
)

TABLE_2 = TabularData.from_dict(
    {
        "a": [10, 11, 12, 13, 14],
        "b": [15, 16, 17, 18, 19],
    }
)


def test_concat() -> None:
    result = TABLE_1.concat(TABLE_2)
    assert np.array_equal(
        result.to_numpy(),
        np.array(
            [
                [0, 5],
                [1, 6],
                [2, 7],
                [3, 8],
                [4, 9],
                [10, 15],
                [11, 16],
                [12, 17],
                [13, 18],
                [14, 19],
            ],
            dtype=object,
        ),
    )

    result = result.head(3)
    assert np.array_equal(
        result.to_numpy(),
        np.array(
            [
                [0, 5],
                [1, 6],
                [2, 7],
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
                [1, 1],
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
