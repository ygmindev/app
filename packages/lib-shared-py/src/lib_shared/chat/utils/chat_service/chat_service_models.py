# template version: 1.0.0


from typing import AsyncIterable

from lib_ai.agent.utils.agent.agent import Agent
from lib_model.chat.chat.chat import Chat

from lib_shared.core.utils.base_model.base_model import BaseModel
from lib_shared.core.utils.private_field.private_field import PrivateField
from lib_shared.database.utils.database.database import Database
from lib_shared.database.utils.redis.redis import Redis


class ChatServiceModel(BaseModel):
    _database: Database = PrivateField()
    _redis: Redis = PrivateField()
    _agent: Agent = PrivateField()

    async def stream(
        self,
        message: str,
        chat_id: str,
    ) -> AsyncIterable[str | dict]: ...

    async def get_chat(
        self,
        id: str,
        message: str,
    ) -> Chat: ...
