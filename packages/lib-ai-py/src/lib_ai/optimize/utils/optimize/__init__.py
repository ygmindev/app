from __future__ import annotations

from typing import Any, Mapping, Unpack

from lib_ai.optimize.utils.optimize._optimize import _optimize
from lib_ai.optimize.utils.optimize.optimize_models import (
    OptimizeModel,
    OptimizeParamsModel,
)


def optimize[T: Mapping[str, Any]](**params: Unpack[OptimizeParamsModel[T]]) -> OptimizeModel[T]:
    return _optimize(**params)
