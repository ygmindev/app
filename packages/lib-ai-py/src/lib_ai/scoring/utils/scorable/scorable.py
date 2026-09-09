from typing import Callable, Protocol, cast

from lib_ai.data.matrix_data import MatrixData

Scorer = Callable[[MatrixData, MatrixData], float]


class DecoratedScorer[TType: Scorer](Protocol):
    name: str
    is_loss: bool = False
    __call__: TType


def _scorable[TType: Scorer](
    name: str | None = None,
    is_loss: bool = False,
) -> Callable[[TType], DecoratedScorer[TType]]:

    def decorator(func: Scorer) -> DecoratedScorer:
        func.name = name or getattr(func, "__name__", "")
        func.is_loss = is_loss
        return cast(DecoratedScorer[TType], func)

    return decorator


scorable = _scorable
