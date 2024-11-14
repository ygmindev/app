from typing import Unpack

import pydash as _
from lib_shared.core.utils.get_item._get_item_models import (
    _GetItemModel,
    _GetItemParamsModel,
)
from lib_shared.core.utils.not_found_exception import NotFoundException


def _get_item(*params: Unpack[_GetItemParamsModel]) -> _GetItemModel:
    d, v, *default = params
    default_safe = default[0] if len(default) else None

    if d is None:
        return default_safe

    result = _.get(
        d,
        v,
        default=default_safe,
    )
    if result is None and default is []:
        raise NotFoundException(str(v))
    return result
