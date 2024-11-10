from random import uniform
from typing import Unpack

from lib_shared.core.utils.get_item import get_item
from lib_shared.core.utils.random.random_models import RandomModel, RandomParamsModel


def random(**params: Unpack[RandomParamsModel]) -> RandomModel:
    min_value = get_item(params, "min")
    max_value = get_item(params, "max")
    n_decimals = get_item(params, "n_decimals", 0)
    value = uniform(min_value, max_value)
    return round(value, n_decimals)
