from abc import abstractmethod

from lib_shared.core.utils.base_model.base_model import BaseModel

from lib_ai.scoring.constants import ScoringMode


class EarlyStoppingModel(BaseModel):
    best: float | None = None
    count: int = 0
    patience: int = 100
    tolerance: float = 1e-1
    scoring_mode: ScoringMode = ScoringMode.MIN

    @abstractmethod
    def is_improved(
        self,
        score: float,
    ) -> bool: ...

    @abstractmethod
    def stop(
        self,
        score: float,
    ) -> bool: ...
