from typing import Mapping, Tuple, Union

type MergeParamsModel[
    TDest: Mapping,
    TSource: Mapping,
] = Tuple[
    TDest | None,
    TSource | None,
]

type MergeModel[
    TDest: Mapping,
    TSource: Mapping,
] = Union[
    TDest | None,
    TSource | None,
]
