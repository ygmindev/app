from enum import Enum


class OptimizeSpaceDistribution(Enum):
    LOG_NORMAL = "LOG_NORMAL"
    OPTIONS = "OPTIONS"
    Q_LOG_NORMAL = "Q_LOG_NORMAL"
    Q_UNIFORM = "Q_UNIFORM"
    UNIFORM = "UNIFORM"
