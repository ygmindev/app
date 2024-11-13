from __future__ import annotations

from typing import Any, Mapping, Unpack

from hyperopt import STATUS_OK, fmin, hp, tpe
from lib_ai.optimize.utils.optimize._optimize_models import (
    _OptimizeModel,
    _OptimizeParamsModel,
    _OptimizeSpaceParamsModel,
)
from lib_ai.optimize.utils.optimize.optimize_constants import (
    OPTIMIZE_SPACE_DISTRIBUTION,
)
from lib_ai.scoring.scoring_constants import SCORING_MODE
from lib_shared.core.utils.get_item import get_item
from lib_shared.core.utils.invalid_type_exception import InvalidTypeException


def _get_space(
    name: str,
    dist: OPTIMIZE_SPACE_DISTRIBUTION,
    dist_params: _OptimizeSpaceParamsModel,
) -> Any:
    match dist:
        case OPTIMIZE_SPACE_DISTRIBUTION.LOG_NORMAL:
            mu = get_item(dist_params, "mu")
            sigma = get_item(dist_params, "sigma")
            return hp.lognormal(name, mu, sigma)
        case OPTIMIZE_SPACE_DISTRIBUTION.OPTIONS:
            options = get_item(dist_params, "options")
            return hp.choice(name, options)
        case OPTIMIZE_SPACE_DISTRIBUTION.Q_LOG_NORMAL:
            mu = get_item(dist_params, "mu")
            sigma = get_item(dist_params, "sigma")
            q = get_item(dist_params, "q", 1)
            return hp.qlognormal(name, mu, sigma, q)
        case OPTIMIZE_SPACE_DISTRIBUTION.Q_UNIFORM:
            lower = get_item(dist_params, "lower")
            upper = get_item(dist_params, "upper")
            q = get_item(dist_params, "q", 1)
            return hp.quniform(name, lower, upper, q)
        case OPTIMIZE_SPACE_DISTRIBUTION.UNIFORM:
            lower = get_item(dist_params, "lower")
            upper = get_item(dist_params, "upper")
            return hp.uniform(name, lower, upper)
        case _:
            raise InvalidTypeException()


def _optimize[T: Mapping[str, Any]](**params: Unpack[_OptimizeParamsModel[T]]) -> _OptimizeModel[T]:
    n_trials = get_item(params, "n_trials", 100)
    objective = get_item(params, "objective")
    scoring_mode = get_item(params, "scoring_mode", SCORING_MODE.MIN)

    def _objective(space: T) -> dict[str, Any]:
        score = objective(space)
        loss = score if scoring_mode is SCORING_MODE.MIN else -score
        return {"loss": loss, "status": STATUS_OK}

    spaces = get_item(params, "spaces")
    space = hp.choice(
        "optimize", [{k: _get_space(k, *v) for k, v in space.items()} for space in spaces]
    )
    best = fmin(
        fn=_objective,
        space=space,
        algo=tpe.suggest,
        max_evals=n_trials,
    )
    print(best)
