from typing import Unpack

from lib_shared.core.utils.merge.merge_models import MergeModel, MergeParamsModel


def merge[T: dict](*params: Unpack[MergeParamsModel[T]]) -> MergeModel[T]:
    (dest, source) = params
    for k, v in source.items():
        if isinstance(v, dict):
            merge(v, dest.setdefault(k, {}))
        else:
            dest[k] = dest.get(k, v)
    return dest
