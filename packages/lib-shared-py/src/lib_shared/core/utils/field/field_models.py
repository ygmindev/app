from typing import Callable, Generic, Protocol, TypeVar

from lib_shared.core.utils.field.constants import FieldRelation

TType = TypeVar("TType")

MISSING = object()


class FieldModel(Protocol, Generic[TType]):
    def __call__(
        self,
        default=MISSING,
        default_value: Callable[[], TType] | None = None,
        description: str | None = None,
        is_private: bool = False,
        relation: FieldRelation | None = None,
        root: str | None = None,
        alias: str | None = None,
    ) -> TType: ...
