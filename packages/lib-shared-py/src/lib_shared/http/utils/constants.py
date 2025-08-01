from enum import Enum


class HTTP_METHOD(Enum):
    GET = "GET"
    POST = "POST"
    PUT = "PUT"
    DELETE = "DELETE"


class HTTP_CONTENT_TYPE(Enum):
    JSON = "application/json"
    XML = "application/xml"
