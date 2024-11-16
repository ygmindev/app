from __future__ import annotations

from typing import Any, Mapping, Tuple, Unpack, cast

from hyperopt import STATUS_OK, Trials, fmin, hp, tpe
from lib_ai.model.utils.early_stopping import EarlyStopping
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
            return hp.uniformint(name, lower, upper, q=q)
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

    early_stopping = EarlyStopping()

    def _early_stopping(trials, *args) -> Tuple[bool, Tuple[Any, ...]]:
        return early_stopping.stop(score=trials.losses()[-1]), args

    trials = Trials()
    best = fmin(
        algo=tpe.suggest,
        early_stop_fn=_early_stopping,
        fn=_objective,
        max_evals=n_trials,
        space=space,
        trials=trials,
        verbose=False,
    )
    if best:
        best.pop("optimize")
    return cast(T, best)
