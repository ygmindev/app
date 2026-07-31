from typing import Any, Protocol


class IsListlikeModel(Protocol):
    def __call__(
        self,
        params: Any,
    ) -> bool: ...
