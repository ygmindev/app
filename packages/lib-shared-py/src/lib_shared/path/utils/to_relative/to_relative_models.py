from typing import NotRequired, TypedDict


class ToRelativeParamsModel(TypedDict):
    source: NotRequired[str]
    target: str


type ToRelativeModel = str
