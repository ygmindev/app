from lib_shared.core.utils.merge import merge


def test_works():
    a = {"key1": "a", "key2": "b"}
    b = {"key2": "c", "key3": "d"}
    result = merge(b, a)
    assert result == {"key1": "a", "key2": "b", "key3": "d"}
