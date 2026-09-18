from enum import StrEnum


class StreamEventType(StrEnum):
    STATUS = "status"
    PROGRESS = "progress"
    EVENT = "event"
