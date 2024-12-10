from typing import Any, Mapping, Sequence, Tuple

type _GetItemParamsModel[T: Mapping] = Tuple[
    T | None,
    Sequence[str] | str,
] | Tuple[
    T | None,
    Sequence[str] | str,
    Any,
]

type _GetItemModel = Any
