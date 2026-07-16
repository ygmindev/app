from typing import Any, Optional, TypeVar

import pydash as _

from lib_shared.core.utils.get_item.get_item_models import GetItemModel

TType = TypeVar("TType")


def _get_item(
    params: Any,
    path: str,
    default: Optional[Any] = None,
    cast: Optional[type[Any]] = None,
) -> Any:
    value = _.get(params, path)
    if value is None:
        return default
    return cast(value) if cast is not None else value


get_item: GetItemModel = _get_item
