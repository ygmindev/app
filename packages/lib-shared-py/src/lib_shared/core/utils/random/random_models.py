from typing import NotRequired, TypedDict


class RandomParamsModel(TypedDict):
    min: float
    max: float
    n_decimals: NotRequired[int]


type RandomModel = float
