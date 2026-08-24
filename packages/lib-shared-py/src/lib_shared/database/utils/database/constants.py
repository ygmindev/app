from enum import StrEnum


class UpsertStrategy(StrEnum):
    REPLACE = "replace"
    UPDATE = "update"
    IGNORE = "ignore"
