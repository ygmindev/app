from lib_ai.dataset.utils.download_dataset._download_dataset import _download_dataset
from lib_ai.dataset.utils.download_dataset.download_dataset_models import (
    DownloadDatasetModel,
    DownloadDatasetParamsModel,
)


def download_dataset(params: DownloadDatasetParamsModel) -> DownloadDatasetModel:
    return _download_dataset(params)
