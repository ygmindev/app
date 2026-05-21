from typing import Callable, Optional

from lib_shared.core.utils.field.field import Field

from lib_model.core.utils.entity_field.constants import FieldRelation, PropertyType

from .entity_field_models import EntityFieldModel, TType


def _EntityField(
    default_value: Callable[[], TType],
    description: Optional[str] = None,
    is_database: bool = False,
    is_private: bool = False,
    relation: Optional[FieldRelation] = None,
    root: Optional[str] = None,
    field_type: Optional[PropertyType] = None,
) -> TType:
    return Field(
        default_value=default_value,
        description=description,
        is_private=is_private,
    )


EntityField: EntityFieldModel = _EntityField
