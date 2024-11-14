from abc import ABC, abstractmethod

from lib_ai.scoring.scoring_constants import SCORING_MODE


class EarlyStoppingModel(ABC):
    @abstractmethod
    def __init__(
        self,
        scoring_mode: SCORING_MODE,
        patience: int = 10,
        tolerance: float = 0.0,
    ) -> None: ...

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
