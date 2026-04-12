from typing import Optional, Protocol


class _PromptModel(Protocol):
    async def __call__(
        self,
        key: str,
        message: Optional[str] = None,
        options: Optional[list[str]] = None,
        is_multiple: bool = False,
        default_value: Optional[str] = None,
    ) -> str | list[str]: ...


PromptModel = _PromptModel
