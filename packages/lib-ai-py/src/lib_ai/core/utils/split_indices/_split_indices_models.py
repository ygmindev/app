from typing import Any, List, NotRequired, Sequence, Tuple, TypedDict


class _SplitIndicesParamsModel(TypedDict):
    n_rows: int
    train_size: NotRequired[float]
    shuffle: NotRequired[bool]
    stratify: NotRequired[Sequence[Any]]


type _SplitIndicesModel = Tuple[List[int], List[int]]
