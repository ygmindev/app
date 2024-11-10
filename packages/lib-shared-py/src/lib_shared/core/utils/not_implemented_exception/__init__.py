from typing import Unpack

from lib_shared.core.utils.not_implemented_exception.not_implemented_exception_models import (
    NotImplementedExceptionParams,
)


class NotImplementedException(Exception):
    def __init__(
        self,
        key: NotImplementedExceptionParams | None = None,
    ) -> None:
        super().__init__(f"not implemented {key}")
