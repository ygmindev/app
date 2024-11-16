from typing import Unpack

from lib_shared.core.utils.set_item._set_item import _set_item
from lib_shared.core.utils.set_item.set_item_models import (
    SetItemModel,
    SetItemParamsModel,
)


def set_item(*params: Unpack[SetItemParamsModel]) -> SetItemModel:
    return _set_item(*params)
