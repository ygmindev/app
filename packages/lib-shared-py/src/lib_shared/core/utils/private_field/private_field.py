from typing import Any

from lib_shared.core.utils.field.field import _Field


def _PrivateField(
    *,
    default_value: Any = None,
    description: str | None = None,
) -> Any:
    return _Field(
        default_value=default_value,
        description=description,
        is_private=True,
    )


def PrivateField(
    default_value: Any = None,
    description: str | None = None,
) -> Any:
    return _PrivateField(
        default_value=default_value,
        description=description,
    )
