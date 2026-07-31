from __future__ import annotations

from typing import (
    Any,
    Callable,
    Mapping,
    NotRequired,
    Protocol,
    Sequence,
    TypedDict,
)

from lib_shared.core.utils.base_model.base_model import BaseModel

from lib_ai.optimize.utils.optimize.constants import OptimizeSpaceDistribution
from lib_ai.scoring.constants import ScoringMode


class OptimizeSpaceMinMaxParamsModel(TypedDict):
    lower: float
    upper: float


class OptimizeSpaceQMinMaxParamsModel(OptimizeSpaceMinMaxParamsModel):
    q: NotRequired[int]


class OptimizeSpaceNormalParamsModel(TypedDict):
    lower: float
    upper: float


class OptimizeSpaceQNormalParamsModel(OptimizeSpaceNormalParamsModel):
    q: NotRequired[int]


class OptimizeSpaceOptionsParamsModel(TypedDict):
    options: Sequence[Any]


type OptimizeSpaceParamsModel = (
    OptimizeSpaceMinMaxParamsModel
    | OptimizeSpaceQMinMaxParamsModel
    | OptimizeSpaceNormalParamsModel
    | OptimizeSpaceQNormalParamsModel
    | OptimizeSpaceOptionsParamsModel
)

type OptimizeSpaceModel = dict[
    str,
    tuple[OptimizeSpaceDistribution, OptimizeSpaceParamsModel],
]


class OptimizeParamsModel(BaseModel):
    n_trials: int
    objective: Callable[[Any], float]
    spaces: Sequence[OptimizeSpaceModel]
    scoring_mode: ScoringMode = ScoringMode.MIN


class OptimizeModel[TType: Mapping[str, Any]](Protocol):
    def __call__(
        self,
        params: OptimizeParamsModel,
    ) -> TType: ...
