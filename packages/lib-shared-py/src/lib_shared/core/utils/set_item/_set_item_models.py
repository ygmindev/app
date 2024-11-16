from typing import Any, Mapping, Sequence, Tuple

type _SetItemParamsModel[T: Mapping] = Tuple[
    T | None,
    Sequence[str] | str,
    Any,
]


type _SetItemModel[T: Mapping] = T
