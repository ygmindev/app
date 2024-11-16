from __future__ import annotations

from typing import Any, Mapping

from lib_ai.optimize.utils.optimize._optimize_models import (
    _OptimizeModel,
    _OptimizeParamsModel,
)


class OptimizeParamsModel[T: Mapping[str, Any]](_OptimizeParamsModel[T]): ...


type OptimizeModel[T: Mapping[str, Any]] = _OptimizeModel[T]
