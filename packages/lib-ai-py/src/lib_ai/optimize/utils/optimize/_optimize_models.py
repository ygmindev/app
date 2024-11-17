from __future__ import annotations

from typing import Any, Callable, Dict, Mapping, NotRequired, Sequence, Tuple, TypedDict

from lib_ai.optimize.utils.optimize.optimize_constants import OptimizeSpaceDistribution
from lib_ai.scoring.scoring_constants import ScoringMode


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
    options: Sequence[Any]


type _OptimizeSpaceParamsModel = _OptimizeSpaceMinMaxParamsModel | _OptimizeSpaceQMinMaxParamsModel | _OptimizeSpaceNormalParamsModel | _OptimizeSpaceQNormalParamsModel | _OptimizeSpaceOptionsParamsModel


class _OptimizeParamsModel[T: Mapping[str, Any]](TypedDict):
    n_trials: NotRequired[int]
    objective: Callable[[T], float]
    scoring_mode: NotRequired[ScoringMode]
    spaces: Sequence[
        Dict[
            str,
            Tuple[OptimizeSpaceDistribution, _OptimizeSpaceParamsModel],
        ]
    ]


type _OptimizeModel[T: Mapping[str, Any]] = T
