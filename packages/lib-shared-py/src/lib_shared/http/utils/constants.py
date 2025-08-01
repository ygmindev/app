from enum import Enum


class HTTP_METHOD(Enum):
    GET = "GET"
    POST = "POST"
    PUT = "PUT"
    DELETE = "DELETE"


class CONTENT_TYPE(Enum):
    JSON = "JSON"
    XML = "XML"
