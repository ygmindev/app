from lib_shared.core.utils.field.constants import FieldRelation
from lib_shared.core.utils.field.field import Field

from lib_model.core.utils.database_entity.database_entity import DatabaseEntity
from lib_model.user.user.user import User


class ProtectedResource(
    DatabaseEntity,
):
    createdBy: User | None = Field(
        relation=FieldRelation.MANY_TO_ONE,
        default=None,
    )
