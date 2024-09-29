from typing import Any, List, NotRequired, Sequence, Tuple, TypedDict


class _SplitIndicesParamsModel(TypedDict):
    nrows: int
    train_size: NotRequired[float | None]
    shuffle: NotRequired[bool | None]
    stratify: NotRequired[Sequence[Any] | None]


type _SplitIndicesModel = Tuple[List[int], List[int]]
