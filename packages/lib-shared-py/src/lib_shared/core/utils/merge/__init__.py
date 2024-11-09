from typing import Mapping, Unpack

from lib_shared.core.utils.merge.merge_models import MergeModel, MergeParamsModel


def merge[
    TDest: Mapping | None,
    TSource: Mapping | None,
](*params: Unpack[MergeParamsModel[TDest, TSource]]) -> MergeModel[
    TDest,
    TSource,
]:
    (dest, source) = params
    if source is None:
        return dest or {}
    if dest is None:
        return source or {}

    for k, v in source.items():
        if isinstance(v, dict):
            merge(v, dest.setdefault(k, {}))
        else:
            dest[k] = dest.get(k, v)
    return dest
