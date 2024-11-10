from typing import Unpack

from lib_shared.core.utils.not_found_exception.not_found_exception_models import (
    NotFoundExceptionParams,
)


class NotFoundException(Exception):
    def __init__(
        self,
        key: NotFoundExceptionParams | None = None,
    ) -> None:
        super().__init__(f"not found {key}")
