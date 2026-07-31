from typing import Any

from lib_shared.core.utils.is_listlike.is_listlike_models import IsListlikeModel


def _is_listlike(
    params: Any,
) -> bool:
    return isinstance(params, (list, tuple))


is_listlike: IsListlikeModel = _is_listlike
