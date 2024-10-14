from lib_ai.core.utils.chunks import chunks
from lib_ai.data.array_data import ArrayData


def test_works() -> None:
    data = ArrayData([1, 2, 3, 4, 5, 6, 7, 8, 9])
    for x in chunks(
        data=data,
        chunk_size=2,
    ):
        print(x)
    assert 1 == 1
