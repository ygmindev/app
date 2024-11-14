from typing import Any, Mapping, Unpack, cast

from lib_shared.core.utils.pick._pick_models import _PickModel, _PickParamsModel
from pydash import pick


def _pick[T: Mapping[str, Any]](*params: Unpack[_PickParamsModel[T]]) -> _PickModel[T]:
    value, keys = params
    return cast(T, pick(value, keys))
