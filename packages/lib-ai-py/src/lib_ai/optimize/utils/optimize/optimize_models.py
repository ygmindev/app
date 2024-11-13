from __future__ import annotations

from typing import Any, Mapping, NotRequired, Tuple, TypedDict

from lib_ai.optimize.utils.optimize._optimize_models import (
    _OptimizeModel,
    _OptimizeParamsModel,
)

type OptimizeParamsModel[T: Mapping[str, Any]] = _OptimizeParamsModel[T]

type OptimizeModel[T: Mapping[str, Any]] = _OptimizeModel[T]
