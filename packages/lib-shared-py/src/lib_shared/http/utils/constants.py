from enum import StrEnum


class HttpMethod(StrEnum):
    GET = "GET"
    POST = "POST"
    PUT = "PUT"
    DELETE = "DELETE"


class HttpContentType(StrEnum):
    JSON = "application/json"
    XML = "application/xml"


PING = "ping"
