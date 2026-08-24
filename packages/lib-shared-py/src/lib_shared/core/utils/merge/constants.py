from enum import StrEnum


class MergeStrategy(StrEnum):
    DEEP = "deep"
    DEEP_APPEND = "deep_append"
    DEEP_PREPEND = "deep_prepend"
