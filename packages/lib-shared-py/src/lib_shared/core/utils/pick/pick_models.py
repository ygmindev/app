from typing import Any, Mapping

from lib_shared.core.utils.pick._pick_models import _PickModel, _PickParamsModel

type PickParamsModel[T: Mapping[str, Any]] = _PickParamsModel[T]

type PickModel[T: Mapping[str, Any]] = _PickModel[T]
