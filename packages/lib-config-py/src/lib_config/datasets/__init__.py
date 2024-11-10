from os.path import join

from lib_config.datasets.datasets_models import DatasetsConfigModel
from lib_config.file import file_config

datasets_config: DatasetsConfigModel = {
    "path": join(file_config["cacheDir"], "datasets"),
}
