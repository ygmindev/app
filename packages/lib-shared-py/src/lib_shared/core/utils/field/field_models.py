from typing import Callable, Generic, Optional, Protocol, TypeVar

from lib_shared.core.utils.field.constants import FieldRelation

TType = TypeVar("TType")

MISSING = object()


class FieldModel(Protocol, Generic[TType]):
    def __call__(
        self,
        default=MISSING,
        default_value: Optional[Callable[[], TType]] = None,
        description: Optional[str] = None,
        is_private: bool = False,
        relation: Optional[FieldRelation] = None,
        root: Optional[str] = None,
    ) -> TType: ...
