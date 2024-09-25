import numpy as np
from lib_ai.data.array_data import ArrayData

TABLE_1 = ArrayData.from_list([0, 1, 2])

TABLE_2 = ArrayData.from_list([3, 4, 5])


def test_add() -> None:
    result = TABLE_1 + TABLE_2
    assert np.array_equal(
        result.to_numpy(),
        np.array(
            [0, 1, 2, 3, 4, 5],
            dtype=object,
        ),
    )

    result = result.head(2)
    assert np.array_equal(
        result.to_numpy(),
        np.array(
            [0, 1],
            dtype=object,
        ),
    )


def test_index() -> None:
    result = TABLE_1[1]
    assert result == 1

    result = TABLE_1[[1, 2]]
    assert np.array_equal(
        result.to_numpy(),
        np.array(
            [1, 2],
            dtype=object,
        ),
    )

    result = TABLE_1[1:3]
    assert np.array_equal(
        result.to_numpy(),
        np.array(
            [1, 2],
            dtype=object,
        ),
    )


def test_shape() -> None:
    assert len(TABLE_1) == 3
