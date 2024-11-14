from typing import Any, Mapping, Unpack

from lib_shared.core.utils.pick._pick import _pick
from lib_shared.core.utils.pick.pick_models import PickModel, PickParamsModel


def pick[T: Mapping[str, Any]](*params: Unpack[PickParamsModel[T]]) -> PickModel[T]:
    return _pick(*params)
