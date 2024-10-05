from lib_shared.core.utils.merge import merge


def test_works() -> None:
    source = {"key1": "a", "key2": "b"}
    dest = {"key2": "c", "key3": "d"}
    result = merge(dest, source)
    assert result == {"key1": "a", "key2": "c", "key3": "d"}
