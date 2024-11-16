from typing import Unpack

from lib_ai.core.utils.kfold._kfold import _kfold
from lib_ai.core.utils.kfold.kfold_models import KfoldModel, KfoldParamsModel
from lib_config.core import core_config
from lib_shared.core.utils.merge2 import merge


def kfold(**params: Unpack[KfoldParamsModel]) -> KfoldModel:
    base_params = {
        "random_state": core_config["random_state"],
    }
    return _kfold(**merge(params, base_params))
