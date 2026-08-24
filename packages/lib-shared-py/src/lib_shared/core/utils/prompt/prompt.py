import questionary


async def _prompt(
    key: str,
    message: str | None = None,
    options: list[str] | None = None,
    is_multiple: bool = False,
    default_value: str | None = None,
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


prompt = _prompt
