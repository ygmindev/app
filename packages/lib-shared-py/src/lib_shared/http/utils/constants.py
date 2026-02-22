from enum import Enum


class HTTP_METHOD(Enum):
    GET = "GET"
    POST = "POST"
    PUT = "PUT"
    DELETE = "DELETE"


class HTTP_STATUS_CODE(Enum):
    BAD_REQUEST = 400
    CONFLICT = 409
    FORBIDDEN = 403
    GATEWAY_TIMEOUT = 504
    INTERNAL_SERVER_ERROR = 500
    INVALID_TOKEN = 498
    NETWORK_CONNECT_TIMEOUT = 599
    NOT_FOUND = 404
    OK = 200
    REDIRECT = 302
    SERVICE_UNAVAILABLE = 503
    UNAUTHORIZED = 401


class HTTP_CONTENT_TYPE(Enum):
    JSON = "application/json"
    XML = "application/xml"


PING = "ping"
