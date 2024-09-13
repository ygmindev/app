from logging import DEBUG, ERROR, INFO, NOTSET, WARN, Logger
from typing import Protocol, Self

from lib_shared.core.utils.logger._logger_models import _LoggerModel
from lib_shared.core.utils.logger.logger_models import LOGGER_LEVEL


class _Logger(_LoggerModel):
    logger: Logger

    def __init__(self, level: LOGGER_LEVEL) -> None:
        logger_level = NOTSET
        match level:
            case LOGGER_LEVEL.DEBUG:
                logger_level = DEBUG
            case LOGGER_LEVEL.ERROR:
                logger_level = ERROR
            case LOGGER_LEVEL.INFO:
                logger_level = INFO
            case LOGGER_LEVEL.WARN:
                logger_level = WARN

        self.logger = Logger("logger", level=logger_level)

    def debug(self: Self, message: str) -> None:
        self.logger.debug(message)

    def error(self: Self, message: str) -> None:
        self.logger.error(message)

    def info(self: Self, message: str) -> None:
        self.logger.info(message)
