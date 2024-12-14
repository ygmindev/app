from typing import Mapping

from lib_shared.core.utils.get_item._get_item_models import (
    _GetItemModel,
    _GetItemParamsModel,
)

type GetItemParamsModel[T: Mapping] = _GetItemParamsModel[T]
type GetItemModel = _GetItemModel
