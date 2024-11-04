from __future__ import annotations

from typing import Callable, Tuple, Unpack

from lib_ai.data.matrix_data import MatrixData

type BaseScorerParamsModel = Tuple[MatrixData, MatrixData]

type BaseScorerModel = float

type BaseScorerCallableModel = Callable[[Unpack[BaseScorerParamsModel]], BaseScorerModel]
