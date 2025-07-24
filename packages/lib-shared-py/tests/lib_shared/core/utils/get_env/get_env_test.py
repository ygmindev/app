from lib_shared.core.utils.get_env import get_env


def test_works() -> None:
    x = get_env(key="test_key", cast=int)
    assert 1 == 1
