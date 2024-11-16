from typing import Unpack

from lib_shared.core.utils.merge._merge import _merge
from lib_shared.core.utils.merge.merge_models import MergeModel, MergeParamsModel


def merge(*params: Unpack[MergeParamsModel]) -> MergeModel:
    return _merge(*params)
