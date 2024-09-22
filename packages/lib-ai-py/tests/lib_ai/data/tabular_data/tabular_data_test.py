import numpy as np
from lib_ai.data.tabular_data import TabularData

TABLE_1 = TabularData.from_dict(
    {
        "int": [0, 1, 2],
        "str": ["0", "1", "2"],
    }
)
TABLE_2 = TabularData.from_dict(
    {
        "int": [3, 4, 5],
        "str": ["3", "4", "5"],
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
            ],
            dtype=object,
        ),
    )

    result = result.head(2)
    assert np.array_equal(
        result.to_numpy(),
        np.array(
            [
                [0, "0"],
                [1, "1"],
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

    result = TABLE_1[[1, 2]]
    assert np.array_equal(
        result.to_numpy(),
        np.array(
            [
                [1, "1"],
                [2, "2"],
            ],
            dtype=object,
        ),
    )

    result = TABLE_1[1:3]
    assert np.array_equal(
        result.to_numpy(),
        np.array(
            [
                [1, "1"],
                [2, "2"],
            ],
            dtype=object,
        ),
    )


def test_shape() -> None:
    assert TABLE_1.shape == (3, 2)
