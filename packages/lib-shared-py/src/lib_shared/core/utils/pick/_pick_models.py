from __future__ import annotations

from typing import Any, Mapping, Sequence, Tuple

type _PickParamsModel[T: Mapping[str, Any]] = Tuple[T, Sequence[str]]

type _PickModel[T: Mapping[str, Any]] = T
