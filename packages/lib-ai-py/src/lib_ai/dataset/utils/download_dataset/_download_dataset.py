from os.path import join
from typing import Unpack

import kaggle
from lib_ai.dataset.utils.download_dataset._download_dataset_models import (
    _DownloadDatasetModel,
    _DownloadDatasetParamsModel,
)
from lib_shared.core.utils.get_item import get_item


def _download_dataset(**params: Unpack[_DownloadDatasetParamsModel]) -> _DownloadDatasetModel:
    name = get_item(params, "name")
    path = get_item(params, "path")
    filename = get_item(params, "filename")
    kaggle.api.dataset_download_files(
        name,
        path=path,
        unzip=True,
    )
    return join(path, filename)
