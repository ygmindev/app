from lib_ai.core.utils.kfold._kfold import _kfold
from lib_ai.core.utils.kfold.kfold_models import KfoldModel, KfoldParamsModel


def kfold(params: KfoldParamsModel) -> KfoldModel:
    return _kfold(params)
