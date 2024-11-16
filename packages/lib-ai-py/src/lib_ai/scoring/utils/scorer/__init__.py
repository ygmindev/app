from typing import Unpack, cast

from lib_ai.scoring.utils.scorer.scorer_models import (
    ScorerCallableModel,
    ScorerModel,
    ScorerParamsModel,
)
from lib_shared.core.utils.get_item import get_item


def scorer[T: ScorerCallableModel](**params: Unpack[ScorerParamsModel]) -> ScorerModel[T]:
    is_loss = get_item(params, "is_loss", False)

    def wrapper(func) -> ScorerCallableModel:
        func.is_loss = is_loss
        return func

    return cast(ScorerModel[T], wrapper)
