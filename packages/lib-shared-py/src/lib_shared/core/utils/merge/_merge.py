from typing import Unpack

import pydash as _
from lib_shared.core.utils.merge._merge_models import _MergeModel, _MergeParamsModel


def _merge(*params: Unpack[_MergeParamsModel]) -> _MergeModel:
    return _.merge(*params)
