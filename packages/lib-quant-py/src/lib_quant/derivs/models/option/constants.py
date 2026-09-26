from enum import StrEnum


class OptionType(StrEnum):
    CALL = "call"
    PUT = "put"


class ExerciseType(StrEnum):
    EUROPEAN = "european"
    AMERICAN = "american"
