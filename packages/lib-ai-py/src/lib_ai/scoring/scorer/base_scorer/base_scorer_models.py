from __future__ import annotations

from typing import Any, Callable, Mapping, Tuple, Unpack

from lib_ai.data.matrix_data import MatrixData

type BaseScorerParamsModel = Tuple[MatrixData, MatrixData]

type BaseScorerCallableModel[T: Mapping[str, Any]] = Callable[[Unpack[BaseScorerParamsModel]], T]
