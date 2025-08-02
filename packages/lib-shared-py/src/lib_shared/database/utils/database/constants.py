from enum import Enum


class UPSERT_STRATEGY(Enum):
    REPLACE = "replace"
    UPDATE = "update"
    IGNORE = "ignore"
