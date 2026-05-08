# template version: 1.0.0

from typing import Any


class _LoggerModel:
    def debug(self, *args: Any) -> None: ...

    def error(self, *args: Any) -> None: ...

    def info(self, *args: Any) -> None: ...


class LoggerModel(_LoggerModel):
    def success(self, *args: Any) -> None: ...
