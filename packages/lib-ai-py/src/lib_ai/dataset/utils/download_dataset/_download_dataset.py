from typing import Unpack

import kaggle
from lib_ai.dataset.utils.download_dataset._download_dataset_models import (
    _DownloadDatasetModel,
    _DownloadDatasetParamsModel,
)
from lib_shared.core.utils.get_item import get_item


def _download_dataset(**params: Unpack[_DownloadDatasetParamsModel]) -> _DownloadDatasetModel:
    name = params.get("name")
    path = params.get("path")
    kaggle.api.dataset_download_files(ds.ref, path="dataset_download")
    return None
