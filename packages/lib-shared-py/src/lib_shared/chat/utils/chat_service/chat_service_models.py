# template version: 1.0.0


from typing import AsyncIterable

from lib_model.chat.chat.chat import Chat


class ChatServiceModel:
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
