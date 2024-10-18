from math import floor, log10
from random import uniform
from typing import Unpack

from lib_shared.core.utils.random.random_models import RandomModel, RandomParamsModel


def random(**params: Unpack[RandomParamsModel]) -> RandomModel:
    min_value = params.get("min")
    max_value = params.get("max")
    n_decimals = params.get("n_decimals", 0)
    value = uniform(min_value, max_value)
    return round(value, n_decimals)
