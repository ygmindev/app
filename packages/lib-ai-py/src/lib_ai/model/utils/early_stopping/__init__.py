from lib_ai.model.utils.early_stopping.early_stopping_models import EarlyStoppingModel
from lib_ai.scoring.scoring_constants import ScoringMode


class EarlyStopping(EarlyStoppingModel):
    _best: float | None = None
    _count: int = 0
    _patience: int
    _tolerance: float

    def __init__(
        self,
        scoring_mode: ScoringMode = ScoringMode.MIN,
        patience: int = 100,
        tolerance: float = 1e-1,
    ) -> None:
        self._scoring_mode = scoring_mode
        self._patience = patience
        self._tolerance = tolerance

    def is_improved(
        self,
        score: float,
    ) -> bool:
        if self._best is None:
            self._best = score
            return False
        return (
            score < (self._best - self._tolerance)
            if self._scoring_mode == ScoringMode.MIN
            else score > (self._best + self._tolerance)
        )

    def stop(
        self,
        score: float,
    ) -> bool:
        if self.is_improved(score):
            self._best = score
            self._count = 0
            return False

        self._count += 1
        return self._count >= self._patience
