from lib_shared.core.utils.random import random


def test_works() -> None:
    min_value = 10
    max_value = 1000
    n_decimals = 2
    value = random(
        min=min_value,
        max=max_value,
        n_decimals=n_decimals,
    )
    assert min_value <= value <= max_value
    assert len(str(value).split(".")[1]) == n_decimals
