from typing import Callable, cast

from lib_ai.scoring.utils.scorable.scorable_models import (
    DecoratedScorerModel,
    ScorableModel,
    ScorerModel,
)


def _scorable[TType: ScorerModel](
    name: str | None = None,
    is_loss: bool = False,
) -> Callable[[TType], DecoratedScorerModel[TType]]:

    def decorator(func: ScorerModel) -> DecoratedScorerModel:
        func.name = name or getattr(func, "__name__", "")
        func.is_loss = is_loss
        return cast(DecoratedScorerModel[TType], func)

    return decorator


scorable: ScorableModel = _scorable
