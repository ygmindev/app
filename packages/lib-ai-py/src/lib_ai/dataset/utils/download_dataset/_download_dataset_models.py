from typing import TypedDict


class _DownloadDatasetParamsModel(TypedDict, total=False):
    name: str
    path: str
    filename: str


type _DownloadDatasetModel = str
