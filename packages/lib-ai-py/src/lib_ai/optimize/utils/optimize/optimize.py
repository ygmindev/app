from __future__ import annotations

from typing import Any, Mapping, Tuple, cast

from hyperopt import STATUS_OK, Trials, fmin, hp, tpe
from lib_shared.core.utils.get_item import get_item
from lib_shared.core.utils.invalid_type_exception import InvalidTypeException

from lib_ai.model.utils.early_stopping import EarlyStopping
from lib_ai.optimize.utils.optimize.constants import OptimizeSpaceDistribution
from lib_ai.optimize.utils.optimize.optimize_models import (
    OptimizeModel,
    OptimizeParamsModel,
    OptimizeSpaceParamsModel,
)
from lib_ai.scoring.constants import ScoringMode


def _get_space(
    name: str,
    dist: OptimizeSpaceDistribution,
    dist_params: OptimizeSpaceParamsModel,
) -> Any:
    match dist:
        case OptimizeSpaceDistribution.LOG_NORMAL:
            mu = get_item(dist_params, "mu")
            sigma = get_item(dist_params, "sigma")
            return hp.lognormal(name, mu, sigma)
        case OptimizeSpaceDistribution.OPTIONS:
            options = get_item(dist_params, "options")
            return hp.choice(name, options)
        case OptimizeSpaceDistribution.Q_LOG_NORMAL:
            mu = get_item(dist_params, "mu")
            sigma = get_item(dist_params, "sigma")
            q = get_item(dist_params, "q", 1)
            return hp.qlognormal(name, mu, sigma, q)
        case OptimizeSpaceDistribution.Q_UNIFORM:
            lower = get_item(dist_params, "lower")
            upper = get_item(dist_params, "upper")
            q = get_item(dist_params, "q", 1)
            return hp.uniformint(name, lower, upper, q=q)
        case OptimizeSpaceDistribution.UNIFORM:
            lower = get_item(dist_params, "lower")
            upper = get_item(dist_params, "upper")
            return hp.uniform(name, lower, upper)
        case _:
            raise InvalidTypeException()


def _optimize[TType: Mapping[str, Any]](
    params: OptimizeParamsModel,
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

    def _early_stopping(trials, *args) -> Tuple[bool, Tuple[Any, ...]]:
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


optimize: OptimizeModel = _optimize
