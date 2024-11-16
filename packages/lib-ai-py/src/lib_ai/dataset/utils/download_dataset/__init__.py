from typing import Unpack

from lib_ai.dataset.utils.download_dataset._download_dataset import _download_dataset
from lib_ai.dataset.utils.download_dataset.download_dataset_models import (
    DownloadDatasetModel,
    DownloadDatasetParamsModel,
)
from lib_shared.core.utils.get_item import get_item
from lib_shared.core.utils.merge2 import merge
from lib_shared.path.utils.from_working import from_working


def download_dataset(**params: Unpack[DownloadDatasetParamsModel]) -> DownloadDatasetModel:
    paths = ["_cache", "datasets", get_item(params, "path", None)]
    paths = [x for x in paths if x is not None]
    return _download_dataset(
        filename=params["filename"],
        name=params["name"],
        path=from_working(*paths),
    )
