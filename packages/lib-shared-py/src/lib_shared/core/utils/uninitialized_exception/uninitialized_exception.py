from .uninitialized_exception_models import (
    UninitializedExceptionParams,
)


class UninitializedException(Exception):
    def __init__(
        self,
        key: UninitializedExceptionParams | None = None,
    ) -> None:
        super().__init__(f"uninitialized {key}")
