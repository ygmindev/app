from typing import NotRequired, TypedDict


class _KfoldParamsModel(TypedDict):
    n_splits: int
    is_shuffle: NotRequired[bool]


type _KfoldModel = None
