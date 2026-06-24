# template version: 1.0.0


from typing import AsyncIterable, Optional


class ChatServiceModel:
    async def stream(
        self,
        message: str,
        chat_id: Optional[str] = None,
    ) -> AsyncIterable[str | dict]: ...
