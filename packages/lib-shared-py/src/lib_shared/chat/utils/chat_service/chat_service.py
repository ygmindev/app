# template version: 1.0.0
import asyncio
import json
from typing import Any, AsyncIterator

from lib_config.database.database import database_config
from lib_config.redis.redis import redis_config
from lib_model.chat.chat.chat import Chat
from lib_model.chat.message.message import Message
from lib_model.chat.message.message_constants import MessageRole

from lib_shared.core.utils.base_model.base_model import BaseModel
from lib_shared.core.utils.private_field.private_field import PrivateField
from lib_shared.database.utils.database.database import Database
from lib_shared.database.utils.redis.redis import Redis

from .chat_service_models import ChatServiceModel

_HISTORY_LIMIT = 20

_CHAT_MAX_LENGTH = 25


class ChatService(BaseModel, ChatServiceModel):
    _database: Database = PrivateField()
    _redis: Redis = PrivateField()

    def __init__(self, **kwargs: Any) -> None:
        super().__init__(**kwargs)
        self._database = Database(config=database_config)
        self._redis = Redis(config=redis_config)

    async def initialize(self) -> None:
        await self._database.initialize()
        await self._redis.initialize()

    async def close(self) -> None:
        await self._database.close()
        await self._redis.close()

    async def get_chat(
        self,
        id: str | None,
        message: str,
    ) -> Chat:
        if id:
            chat = await self._database.find(
                query={"_id": id},
                resource=Chat,
            )
            if not chat.result:
                raise ValueError(f"chat {id} not found")
            return chat.result[0]

        title = message[:_CHAT_MAX_LENGTH] + (
            "..." if len(message) > _CHAT_MAX_LENGTH else ""
        )
        chat = Chat(name=title)
        result = await self._database.create(chat)
        return result.result

    async def _load_history(
        self,
        id: str,
    ) -> list[Message]:
        value = await asyncio.to_thread(
            self._redis.get,
            f"chat:history:{id}",
        )
        if value:
            return json.loads(value)

        result = await self._database.find(
            query={"_id": id},
            resource=Message,
            limit=_HISTORY_LIMIT,
            sort=[("created_at", -1)],
        )
        await self._cache_history(id, result.result)
        return result.result

    async def _cache_history(
        self,
        id: str,
        history: list[Message],
    ) -> None:
        value = Message.to_list(history)
        await asyncio.to_thread(
            self._redis.set,
            f"chat:history:{id}",
            json.dumps(value[-_HISTORY_LIMIT:]),
            3600,
        )

    async def stream(
        self,
        id: str,
        message: str,
    ) -> AsyncIterator[dict]:
        chat = await self.get_chat(id, message)
        user_message = Message(
            chat=chat,
            content=message,
            role=MessageRole.USER,
        )
        result = await self._database.create(user_message)
        yield {
            "event": "id",
            "data": {"id": chat.id},
        }

        history = await self._load_history(chat._id)

        node_path: list[str] = []
        full_response = ""

        # async for event in run_graph_stream(message, chat.id, history):
        #     if event["event"] == "done":
        #         full_response = event["data"].get("full_response", "")
        #         node_path = event["data"].get("node_path", [])
        #     yield event

        # assistant_message = Message(
        #     chat=chat,
        #     role=Role.assistant,
        #     content=full_response,
        #     node_path=node_path,
        # )
        # await self._database.create(assistant_message)

        # chat.message_count += 2  # user + assistant
        # chat.updated_at = datetime.now(timezone.utc)
        # await chat.save()

        history.append(user_message)
        # history.append({"role": "assistant", "content": full_response})
        await self._cache_history(
            chat._id,
            history,
        )
