# template version: 1.0.0
import json
from typing import AsyncIterable

from lib_ai.agent.utils.agent.agent import Agent
from lib_ai.agent.utils.agent_state.agent_state import AgentState
from lib_ai.agent.utils.llm_message.llm_message import LlmMessage
from lib_ai.agent.utils.llm_payload.constants import LlmPayloadType
from lib_ai.agent.utils.llm_payload.llm_payload import LlmPayload
from lib_config.database.database import database_config
from lib_config.redis.redis import redis_config
from lib_model.chat.chat.chat import Chat
from lib_model.chat.message.constants import MessageRole
from lib_model.chat.message.message import Message

from lib_shared.core.utils.base_model.base_model import BaseModel
from lib_shared.core.utils.private_field.private_field import PrivateField
from lib_shared.database.utils.database.database import Database
from lib_shared.database.utils.redis.redis import Redis

from .chat_service_models import ChatServiceModel

_HISTORY_LIMIT = 20

_CHAT_MAX_LENGTH = 25

# TODO: add createdBy


class ChatService(BaseModel, ChatServiceModel):
    _database: Database = PrivateField()
    _redis: Redis = PrivateField()
    _agent: Agent = PrivateField()

    def post_init(self) -> None:
        self._database = Database(config=database_config)
        self._redis = Redis(config=redis_config)

    async def initialize(self) -> None:
        await self._database.initialize()
        await self._redis.initialize()
        state = AgentState()
        self._agent = Agent[AgentState](
            name="test_agent",
            descriptions=["", ""],
            initial_state=state,
        )

    async def close(self) -> None:
        await self._database.close()
        await self._redis.close()

    async def get_chat(
        self,
        id: str,
        message: str,
    ) -> Chat:
        chat = await self._database.find(
            query={"_id": id},
            resource=Chat,
        )
        if not chat.result:
            title = message[:_CHAT_MAX_LENGTH] + (
                "..." if len(message) > _CHAT_MAX_LENGTH else ""
            )
            chat = Chat(name=title)
            chat._id = id
            result = await self._database.create(chat)
            return result.result
        return chat.result[0]

    async def _load_history(
        self,
        id: str,
    ) -> list[Message]:
        value = await self._redis.get(f"chat:history:{id}")
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
        await self._redis.set(
            f"chat:history:{id}",
            json.dumps(value[-_HISTORY_LIMIT:]),
            3600,
        )

    async def stream(
        self,
        message: str,
        chat_id: str,
    ) -> AsyncIterable[str | dict]:
        chat = await self.get_chat(chat_id, message)
        chat_id = str(chat._id)

        params = AgentState()
        user_message = LlmMessage(
            chat=chat,
            content=message,
            role=MessageRole.USER,
        )
        params.messages = [user_message]
        user_message = (await self._database.create(user_message)).result

        history = await self._load_history(chat_id)

        system_message = LlmMessage(
            chat=chat,
            content="",
            role=MessageRole.SYSTEM,
        )
        system_message_id = str(system_message._id)
        response = ""
        yield LlmPayload(
            chat_id=chat_id,
            content="",
            message_id=system_message_id,
            role=MessageRole.SYSTEM,
            type=LlmPayloadType.START,
        ).to_dict()

        async for chunk in self._agent.stream_message(params):
            response += chunk
            yield LlmPayload(
                type=LlmPayloadType.UPDATE,
                chat_id=chat_id,
                message_id=system_message_id,
                role=MessageRole.SYSTEM,
                content=chunk,
            ).to_dict()

        system_message.content = response
        system_message = (await self._database.create(system_message)).result

        yield LlmPayload(
            chat_id=chat_id,
            content=response,
            message_id=system_message_id,
            role=MessageRole.SYSTEM,
            type=LlmPayloadType.END,
        ).to_dict()

        history.append(user_message)
        history.append(system_message)
        await self._cache_history(
            chat_id,
            history,
        )


chat_service = ChatService()
