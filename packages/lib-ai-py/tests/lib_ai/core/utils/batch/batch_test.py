from lib_ai.core.utils.batch import batch
from lib_ai.data.matrix_data import MatrixData


def test_works() -> None:
    data = MatrixData.from_array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
    result = list([list(x.data) for x in batch(data=data, batch_size=3)])
    print(result)
    assert result == [[0, 1, 2], [3, 4, 5], [6, 7, 8], [9]]
