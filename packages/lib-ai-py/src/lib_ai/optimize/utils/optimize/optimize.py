from __future__ import annotations

from typing import Any, Callable, Mapping, Tuple, cast

from hyperopt import STATUS_OK, Trials, fmin, hp, tpe
from lib_shared.core.utils.base_model.base_model import BaseModel
from lib_shared.core.utils.invalid_type_exception import InvalidTypeException

from lib_ai.model.utils.early_stopping import EarlyStopping
from lib_ai.optimize.utils.optimize.constants import OptimizeSpaceDistribution
from lib_ai.scoring.constants import ScoringMode


class OptimizeSpaceMinMaxParams(BaseModel):
    lower: float
    upper: float


class OptimizeSpaceQMinMaxParams(OptimizeSpaceMinMaxParams):
    q: int | None = None


class OptimizeSpaceNormalParams(BaseModel):
    lower: float
    upper: float


class OptimizeSpaceQNormalParams(OptimizeSpaceNormalParams):
    q: int | None = None


class OptimizeSpaceOptionsParams(BaseModel):
    options: list[dict]


type OptimizeSpaceParams = (
    OptimizeSpaceMinMaxParams
    | OptimizeSpaceQMinMaxParams
    | OptimizeSpaceNormalParams
    | OptimizeSpaceQNormalParams
    | OptimizeSpaceOptionsParams
)

type OptimizeSpaceModel = dict[
    str,
    tuple[OptimizeSpaceDistribution, OptimizeSpaceParams],
]


class OptimizeParams(BaseModel):
    n_trials: int
    objective: Callable[[Any], float]
    spaces: list[OptimizeSpaceModel]
    scoring_mode: ScoringMode = ScoringMode.MIN


def _get_space(
    name: str,
    dist: OptimizeSpaceDistribution,
    params: OptimizeSpaceParams,
) -> Any:
    match dist:
        case OptimizeSpaceDistribution.LOG_NORMAL:
            dist_params = cast(OptimizeSpaceMinMaxParams, params)
            mu = params.mu
            sigma = params.sigma
            return hp.lognormal(name, mu, sigma)
        case OptimizeSpaceDistribution.OPTIONS:
            options = params.options
            return hp.choice(name, options)
        case OptimizeSpaceDistribution.Q_LOG_NORMAL:
            mu = params.mu
            sigma = params.sigma
            q = params.q
            return hp.qlognormal(name, mu, sigma, q[1])
        case OptimizeSpaceDistribution.Q_UNIFORM:
            lower = params.lower
            upper = params.upper
            q = params.q
            return hp.uniformint(name, lower, upper, q=q[1])
        case OptimizeSpaceDistribution.UNIFORM:
            lower = params.lower
            upper = params.upper
            return hp.uniform(name, lower, upper)
        case _:
            raise InvalidTypeException()


def _optimize[TType: Mapping[str, Any]](
    params: OptimizeParams,
) -> TType:
    def _objective(space: TType) -> dict[str, Any]:
        score = params.objective(space)
        loss = score if params.scoring_mode is ScoringMode.MIN else -score
        return {"loss": loss, "status": STATUS_OK}

    space = hp.choice(
        "optimize",
        [{k: _get_space(k, *v) for k, v in space.items()} for space in params.spaces],
    )

    early_stopping = EarlyStopping()

    def _early_stopping(trials, *args) -> tuple[bool, Tuple[Any, ...]]:
        return early_stopping.stop(score=trials.losses()[-1]), args

    trials = Trials()
    best = fmin(
        algo=tpe.suggest,
        early_stop_fn=_early_stopping,
        fn=_objective,
        max_evals=params.n_trials,
        space=space,
        trials=trials,
        verbose=False,
    )
    if best:
        best.pop("optimize")

    return cast(TType, best)


optimize = _optimize
