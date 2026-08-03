from lib_ai.model.utils.early_stopping.early_stopping_models import EarlyStoppingModel
from lib_ai.scoring.constants import ScoringMode


class EarlyStopping(EarlyStoppingModel):
    def is_improved(
        self,
        score: float,
    ) -> bool:
        if self.best is None:
            self.best = score
            return False
        return (
            score < (self.best - self.tolerance)
            if self.scoring_mode == ScoringMode.MIN
            else score > (self.best + self.tolerance)
        )

    def stop(
        self,
        score: float,
    ) -> bool:
        if self.is_improved(score):
            self.best = score
            self.count = 0
            return False

        self.count += 1
        return self.count >= self.patience
