from logging import DEBUG, ERROR, INFO, NOTSET, WARN, Logger, getLogger, basicConfig
from typing import Any

from lib_shared.core.utils.logger._logger_models import _LoggerModel
from lib_shared.core.utils.logger.logger_constants import LoggerLevel


class _Logger(_LoggerModel):
    logger: Logger

    def __init__(self, level: LoggerLevel) -> None:
        logger_level = NOTSET
        match level:
            case LoggerLevel.DEBUG:
                logger_level = DEBUG
            case LoggerLevel.ERROR:
                logger_level = ERROR
            case LoggerLevel.INFO:
                logger_level = INFO
            case LoggerLevel.WARN:
                logger_level = WARN

        self.logger = getLogger()
        self.logger.setLevel(logger_level)
        basicConfig(
            level=logger_level,
            # format="%(asctime)s - %(name)s - %(levelname)s - %(message)s",
        )

    def debug(self, message: Any) -> None:
        self.logger.debug(message)

    def error(self, message: Any) -> None:
        self.logger.error(message)

    def info(self, message: Any) -> None:
        self.logger.info(message)
