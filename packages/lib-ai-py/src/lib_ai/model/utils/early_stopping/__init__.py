from lib_ai.model.utils.early_stopping.early_stopping_constants import (
    EARLY_STOPPING_MODE,
)
from lib_ai.model.utils.early_stopping.early_stopping_models import EarlyStoppingModel


class EarlyStopping(EarlyStoppingModel):
    _best: float | None = None
    _count: int = 0
    _patience: int
    _tolerance: float

    def __init__(
        self,
        mode: EARLY_STOPPING_MODE = EARLY_STOPPING_MODE.MIN,
        patience: int = 1000,
        tolerance: float = 1e-1,
    ) -> None:
        self._mode = mode
        self._patience = patience
        self._tolerance = tolerance

    def stop(
        self,
        score: float,
    ) -> bool:
        if self._best is None:
            self._best = score
            return False

        improved = (
            score < (self._best - self._tolerance)
            if self._mode == EARLY_STOPPING_MODE.MIN
            else score > (self._best + self._tolerance)
        )
        if improved:
            self._best = score
            self._count = 0
            return False

        self._count += 1
        return self._count >= self._patience
