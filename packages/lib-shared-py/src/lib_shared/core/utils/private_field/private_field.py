from typing import Any, Callable

from lib_shared.core.utils.field.constants import FieldRelation
from lib_shared.core.utils.field.field import MISSING, TType, _Field


def _PrivateField(
    default=MISSING,
    default_factory: Callable[[], TType] | None = None,
    description: str | None = None,
    relation: FieldRelation | None = None,
    root: str | None = None,
    alias: str | None = None,
) -> Any:
    return _Field(
        default=default,
        default_factory=default_factory,
        description=description,
        is_private=True,
        relation=relation,
        root=root,
        alias=alias,
    )


PrivateField = _PrivateField
