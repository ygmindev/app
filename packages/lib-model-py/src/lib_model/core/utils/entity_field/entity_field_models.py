from typing import Callable, Generic, Optional, Protocol, TypeVar

from lib_model.core.utils.entity_field.constants import FieldRelation, PropertyType

TType = TypeVar("TType")


class EntityFieldModel(Protocol, Generic[TType]):
    def __call__(
        self,
        default_value: Callable[[], TType],
        description: Optional[str] = None,
        is_database: bool = False,
        is_private: bool = False,
        relation: Optional[FieldRelation] = None,
        root: Optional[str] = None,
        field_type: Optional[PropertyType] = None,
    ) -> TType: ...
