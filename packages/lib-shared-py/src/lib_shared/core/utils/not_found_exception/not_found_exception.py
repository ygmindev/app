class NotFoundException(Exception):
    def __init__(
        self,
        key: str | None = None,
    ) -> None:
        super().__init__(f"not found {key}")
