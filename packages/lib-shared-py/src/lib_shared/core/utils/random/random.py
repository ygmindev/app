from random import uniform


def random(
    min_value: float,
    max_value: float,
    n_decimals: int = 0,
) -> float:
    value = uniform(min_value, max_value)
    return round(value, n_decimals)
