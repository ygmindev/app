from typing import Optional

import questionary

from .prompt_models import PromptModel


async def _prompt(
    key: str,
    message: Optional[str] = None,
    options: Optional[list[str]] = None,
    is_multiple: bool = False,
    default_value: Optional[str] = None,
) -> str | list[str]:
    if message is None:
        message = f"please enter a value for {key}"
    if options:
        if is_multiple:
            default_choices = [] if default_value is None else default_value.split(",")
            choices = [
                questionary.Choice(x, checked=x in default_choices) for x in options
            ]
            return await questionary.checkbox(
                message,
                choices=choices,
                pointer="✅",
                use_search_filter=True,
            ).ask_async()

        return await questionary.select(
            message,
            choices=options,
            pointer="✅",
            use_search_filter=True,
            default_value=default_value or None,
        ).ask_async()
    return await questionary.text(
        message,
        default=default_value or "",
    ).ask_async()


prompt: PromptModel = _prompt
