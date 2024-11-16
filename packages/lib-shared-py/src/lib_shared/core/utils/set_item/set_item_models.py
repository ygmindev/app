from typing import Mapping

from lib_shared.core.utils.set_item._set_item_models import (
    _SetItemModel,
    _SetItemParamsModel,
)

type SetItemParamsModel[T: Mapping] = _SetItemParamsModel[T]

type SetItemModel[T: Mapping] = _SetItemModel[T]
