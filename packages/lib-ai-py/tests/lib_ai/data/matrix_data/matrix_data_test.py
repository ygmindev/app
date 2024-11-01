import torch
from lib_ai.data.matrix_data.matrix_data_fixtures import (
    MATRIX_DATA_FIXTURE_1,
    MATRIX_DATA_FIXTURE_2,
)


def test_works() -> None:
    result = MATRIX_DATA_FIXTURE_1.concat(MATRIX_DATA_FIXTURE_2)
    assert torch.eq(
        result.to_tensor(),
        torch.tensor(
            [
                [0, 1, 2],
                [3, 4, 5],
                [6, 7, 8],
                [9, 10, 11],
                [12, 13, 14],
                [15, 16, 17],
                [18, 19, 20],
                [21, 22, 23],
                [24, 25, 26],
                [27, 28, 29],
            ]
        ),
    ).all()


def test_index() -> None:
    result = MATRIX_DATA_FIXTURE_1[1]
    assert torch.eq(
        result.to_tensor(),
        torch.tensor([[3, 4, 5]]),
    ).all()

    result = MATRIX_DATA_FIXTURE_1[[1, 3]]
    assert torch.eq(
        result.to_tensor(),
        torch.tensor(
            [
                [3, 4, 5],
                [9, 10, 11],
            ],
        ),
    ).all()

    result = MATRIX_DATA_FIXTURE_1[1:3]
    assert torch.eq(
        result.to_tensor(),
        torch.tensor(
            [
                [3, 4, 5],
                [6, 7, 8],
            ],
        ),
    ).all()


def test_split() -> None:
    [train, test] = MATRIX_DATA_FIXTURE_1.split(train_size=0.8)
    assert torch.eq(
        train.to_tensor(),
        torch.tensor(
            [
                [0, 1, 2],
                [3, 4, 5],
                [6, 7, 8],
                [9, 10, 11],
            ],
        ),
    ).all()

    assert torch.eq(
        test.to_tensor(),
        torch.tensor(
            [
                [12, 13, 14],
            ],
        ),
    ).all()


def test_shape() -> None:
    assert MATRIX_DATA_FIXTURE_1.shape == (5, 3)
