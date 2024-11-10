from typing import Unpack

from lib_shared.core.utils.get_item._get_item import _get_item
from lib_shared.core.utils.get_item.get_item_models import (
    GetItemModel,
    GetItemParamsModel,
)


def get_item(*params: Unpack[GetItemParamsModel]) -> GetItemModel:
    return _get_item(*params)
