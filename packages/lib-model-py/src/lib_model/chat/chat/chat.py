from lib_shared.core.utils.field.field import Field

from lib_model.core.utils.database_entity.database_entity import DatabaseEntity

from .chat_constants import CHAT_RESOURCE_NAME


class Chat(DatabaseEntity, name=CHAT_RESOURCE_NAME):
    name: str = Field()
