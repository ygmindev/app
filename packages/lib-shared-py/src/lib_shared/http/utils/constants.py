from enum import StrEnum


class HTTP_METHOD(StrEnum):
    GET = "GET"
    POST = "POST"
    PUT = "PUT"
    DELETE = "DELETE"


class HTTP_CONTENT_TYPE(StrEnum):
    JSON = "application/json"
    XML = "application/xml"


PING = "ping"
