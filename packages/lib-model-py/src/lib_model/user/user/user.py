from typing import Optional

from lib_shared.core.utils.field.field import Field

from lib_model.core.utils.database_entity.database_entity import DatabaseEntity
from lib_model.user.user.user_models import UserModel

from .constants import USER_RESOURCE_NAME


class User(
    DatabaseEntity,
    UserModel,
    name=USER_RESOURCE_NAME,
):
    # Chat: list = Field(default_value=list)

    callingCode: Optional[str] = Field()

    email: Optional[str] = Field()

    first: Optional[str] = Field()

    last: Optional[str] = Field()

    phone: Optional[str] = Field()
