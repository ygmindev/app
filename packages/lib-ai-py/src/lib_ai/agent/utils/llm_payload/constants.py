from enum import StrEnum


class LlmPayloadType(StrEnum):
    START = "start"
    UPDATE = "update"
    END = "end"
    ERROR = "error"
