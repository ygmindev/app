# template version: 1.0.0

from logging import Logger as LoggerBase
from logging import basicConfig, getLogger
from typing import Any

from lib_shared.core.utils.base_model.base_model import BaseModel
from lib_shared.core.utils.logger.constants import LoggerLevel
from lib_shared.core.utils.private_field.private_field import PrivateField


class _Logger(BaseModel):
    name: str = "main"
    level: LoggerLevel = LoggerLevel.INFO

    _logger: LoggerBase = PrivateField()

    def model_post_init(self, __context: Any) -> None:
        self._logger = getLogger(name=self.name)
        self._logger.setLevel(self.level.value)
        basicConfig(
            level=self.level.value,
            format="%(asctime)s - %(name)s - %(levelname)s - %(message)s",
        )

    def _log(
        self,
        level: LoggerLevel,
        *args: Any,
    ) -> None:
        self._logger.log(
            level.value,
            *args,
        )

    def debug(self, *args: Any) -> None:
        self._log(
            LoggerLevel.DEBUG,
            *args,
        )

    def error(self, *args: Any) -> None:
        self._log(
            LoggerLevel.ERROR,
            *args,
        )

    def warn(self, *args: Any) -> None:
        self._log(
            LoggerLevel.WARN,
            *args,
        )

    def info(self, *args: Any) -> None:
        self._log(
            LoggerLevel.INFO,
            *args,
        )


class Logger(_Logger):
    def success(self, *args: Any) -> None:
        super()._log(
            LoggerLevel.INFO,
            "✅ ",
            *args,
        )


logger = Logger()
