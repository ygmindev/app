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

    callingCode: str | None = Field(default=None)

    email: str | None = Field(default=None)

    first: str | None = Field(default=None)

    last: str | None = Field(default=None)

    phone: str | None = Field(default=None)
