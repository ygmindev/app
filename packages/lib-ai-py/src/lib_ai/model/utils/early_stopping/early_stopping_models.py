from abc import ABC, abstractmethod

from lib_ai.model.utils.early_stopping.early_stopping_constants import (
    EARLY_STOPPING_MODE,
)


class EarlyStoppingModel(ABC):
    @abstractmethod
    def __init__(
        self,
        mode: EARLY_STOPPING_MODE,
        patience: int = 10,
        tolerance: float = 0.0,
    ) -> None: ...

    @abstractmethod
    def stop(
        self,
        score: float,
    ) -> bool: ...
