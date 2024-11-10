from lib_config.file.file_models import FileConfigModel
from lib_shared.path.utils.from_working import from_working

file_config: FileConfigModel = {
    "cacheDir": from_working("_cache"),
}
