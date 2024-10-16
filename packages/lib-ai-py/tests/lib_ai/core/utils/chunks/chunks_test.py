from lib_ai.core.utils.chunks import chunks
from lib_ai.data.array_data import ArrayData


def test_works() -> None:
    data = ArrayData([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
    result = list([x for x in chunks(data=data, chunk_size=3)])
    assert result == [[0, 1, 2], [3, 4, 5], [6, 7, 8], [9]]
