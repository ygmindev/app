from typing import Any

from lib_shared.core.utils.field.field import _Field


def _PrivateField(
    *,
    default_value: Any = None,
    description: str | None = None,
) -> Any:
    return _Field(
        default_factory=default_value,
        description=description,
        is_private=True,
    )


PrivateField = _PrivateField
