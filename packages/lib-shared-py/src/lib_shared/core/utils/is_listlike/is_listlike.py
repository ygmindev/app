from typing import Any


def _is_listlike(
    params: Any,
) -> bool:
    return isinstance(params, (list, tuple))


is_listlike = _is_listlike
