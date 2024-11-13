from __future__ import annotations

from typing import Any, Callable, Dict, Mapping, NotRequired, Tuple, TypedDict

from lib_ai.optimize.utils.optimize.optimize_constants import (
    OPTIMIZE_SPACE_DISTRIBUTION,
)
from lib_ai.scoring.scoring_constants import SCORING_MODE


class _OptimizeSpaceMinMaxParamsModel(TypedDict):
    lower: float
    upper: float


class _OptimizeSpaceQMinMaxParamsModel(_OptimizeSpaceMinMaxParamsModel):
    q: NotRequired[int]


class _OptimizeSpaceNormalParamsModel(TypedDict):
    lower: float
    upper: float


class _OptimizeSpaceQNormalParamsModel(_OptimizeSpaceNormalParamsModel):
    q: NotRequired[int]


class _OptimizeSpaceOptionsParamsModel(TypedDict):
    options: Tuple[Any]


type _OptimizeSpaceParamsModel = _OptimizeSpaceMinMaxParamsModel | _OptimizeSpaceQMinMaxParamsModel | _OptimizeSpaceNormalParamsModel | _OptimizeSpaceQNormalParamsModel | _OptimizeSpaceOptionsParamsModel


class _OptimizeParamsModel[T: Mapping[str, Any]](TypedDict):
    n_trials: NotRequired[int]
    objective: Callable[[T], float]
    scoring_mode: NotRequired[SCORING_MODE]
    spaces: Tuple[
        Dict[
            str,
            Tuple[OPTIMIZE_SPACE_DISTRIBUTION, _OptimizeSpaceParamsModel],
        ]
    ]


type _OptimizeModel[T: Mapping[str, Any]] = T
