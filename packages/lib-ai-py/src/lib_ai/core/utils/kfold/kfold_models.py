from typing import Never, NotRequired

from lib_ai.core.utils.kfold._kfold_models import _KfoldModel, _KfoldParamsModel


class KfoldParamsModel(_KfoldParamsModel):
    random_state: NotRequired[int]
    n_rows: NotRequired[Never]


type KfoldModel = _KfoldModel
