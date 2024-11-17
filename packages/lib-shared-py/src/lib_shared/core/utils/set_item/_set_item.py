from __future__ import annotations

from typing import Mapping, Unpack, cast

import pydash as _
from lib_shared.core.utils.set_item._set_item_models import (
    _SetItemModel,
    _SetItemParamsModel,
)


def _set_item[T: Mapping](*params: Unpack[_SetItemParamsModel[T]]) -> _SetItemModel[T]:
    d, k, v = params
    result = {} if d is None else d
    result = _.set_with(
        d,
        k,
        v,
    )
    return cast(T, result)
