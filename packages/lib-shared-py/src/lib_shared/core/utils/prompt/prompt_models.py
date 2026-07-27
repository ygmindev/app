from typing import Protocol


class _PromptModel(Protocol):
    async def __call__(
        self,
        key: str,
        message: str | None = None,
        options: list[str] | None = None,
        is_multiple: bool = False,
        default_value: str | None = None,
    ) -> str | list[str]: ...


PromptModel = _PromptModel
