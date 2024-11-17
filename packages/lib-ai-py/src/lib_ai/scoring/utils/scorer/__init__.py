from typing import Unpack, cast

from lib_ai.scoring.utils.scorer.scorer_models import (
    ScorerCallableModel,
    ScorerModel,
    ScorerParamsModel,
)
from lib_shared.core.utils.get_item import get_item


def scorer(**params: Unpack[ScorerParamsModel]) -> ScorerModel:
    is_loss = get_item(params, "is_loss", False)
    name = get_item(params, "name")

    def wrapper(func) -> ScorerCallableModel:
        func.is_loss = is_loss
        func.name = name
        return func

    return wrapper
