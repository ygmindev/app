# template version: 1.0.0
import json
from typing import AsyncIterable, cast

from beanie import PydanticObjectId
from lib_ai.agent.utils.agent.agent import Agent
from lib_ai.agent.utils.agent_state.agent_state import AgentState
from lib_ai.agent.utils.ai_message.ai_message import AIMessage
from lib_ai.agent.utils.ai_message.constants import MessageRole
from lib_ai.agent.utils.llm_payload.constants import LlmPayloadType
from lib_ai.agent.utils.llm_payload.llm_payload import LlmPayload
from lib_config.database.database import database_config
from lib_config.redis.redis import redis_config
from lib_model.chat.chat.chat import Chat
from lib_model.user.user.user import User

from lib_shared.core.utils.base_model.base_model import BaseModel
from lib_shared.core.utils.private_field.private_field import PrivateField
from lib_shared.database.utils.database.database import Database
from lib_shared.database.utils.redis.redis import Redis

from .chat_service_models import ChatServiceModel

_HISTORY_LIMIT = 20
_CHAT_MAX_LENGTH = 25

_MAX_HISTORY_TOKENS = 6000  # tune to your model's context window minus reply headroom


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
            descriptions=[
                "You are a chatbot developed in South Korea.",
                "Always provide direct, concise answers in 1 to 3 sentences maximum. Do not ramble.",
            ],
            initial_state=state,
        )

    async def close(self) -> None:
        await self._database.close()
        await self._redis.close()

    async def get_chat(
        self,
        id: str,
        message: str,
        user: User | None = None,
    ) -> Chat:
        chat = await self._database.find(
            query={"_id": PydanticObjectId(id)},
            resource=Chat,
        )
        if not chat.result:
            title = message[:_CHAT_MAX_LENGTH] + (
                "..." if len(message) > _CHAT_MAX_LENGTH else ""
            )
            chat = Chat(
                name=title,
                id=PydanticObjectId(id),
                createdBy=user,
            )
            result = await self._database.create(chat)
            return result.result
        return chat.result[0]

    async def _load_history(
        self,
        chat_id: str,
    ) -> list[AIMessage]:
        value = await self._redis.get(f"chat:history:{chat_id}")
        if value:
            value = cast(list[dict], json.loads(value))
            return list(map(AIMessage.from_dict, value))
        result = await self._database.find(
            query={"chat": PydanticObjectId(chat_id)},
            resource=AIMessage,
            limit=_HISTORY_LIMIT,
            sort=[("created", -1)],
        )
        value = list(reversed(result.result))
        await self._cache_history(chat_id, value)
        return value

    async def _cache_history(
        self,
        chat_id: str,
        history: list[AIMessage],
    ) -> None:
        value = [x.to_dict() for x in history]
        await self._redis.set(
            f"chat:history:{chat_id}",
            json.dumps(value[-_HISTORY_LIMIT:]),
            3600,
        )

    def _trim(
        self,
        messages: list[AIMessage],
        max_tokens: int,
    ) -> list[AIMessage]:
        result: list[AIMessage] = []
        total = 0
        for msg in reversed(messages):
            n = self._agent.llm.n_tokens([msg])
            if total + n > max_tokens and result:
                break
            result.append(msg)
            total += n
        return list(reversed(result))

    async def stream(
        self,
        message: str,
        chat_id: str,
        user: User | None = None,
    ) -> AsyncIterable[str | dict]:
        chat = await self.get_chat(chat_id, message)
        chat_id = chat._id

        history = await self._load_history(chat_id)

        params = AgentState()
        history_messages = self._trim(history, _MAX_HISTORY_TOKENS)

        user_message = AIMessage(
            chat=chat,
            content=message,
            createdBy=user,
            role=MessageRole.USER,
        )
        params.messages = [*history_messages, user_message]
        user_message = (await self._database.create(user_message)).result

        system_message = AIMessage(
            chat=chat,
            content="",
            role=MessageRole.ASSISTANT,
        )
        system_message_id = system_message._id
        content = ""
        yield LlmPayload(
            chat_id=chat_id,
            content="",
            message_id=system_message_id,
            role=MessageRole.ASSISTANT,
            type=LlmPayloadType.START,
        ).to_dict()

        async for chunk in self._agent.stream(params):
            delta = getattr(chunk, "delta", None) or ""
            content += delta
            yield LlmPayload(
                type=LlmPayloadType.UPDATE,
                chat_id=chat_id,
                message_id=system_message_id,
                role=MessageRole.ASSISTANT,
                content=delta,
            ).to_dict()

        system_message.content = content
        system_message = (await self._database.create(system_message)).result

        yield LlmPayload(
            chat_id=chat_id,
            content=content,
            message_id=system_message_id,
            role=MessageRole.ASSISTANT,
            type=LlmPayloadType.END,
        ).to_dict()

        history.append(user_message)
        history.append(system_message)
        await self._cache_history(
            chat_id,
            history,
        )


chat_service = ChatService()
