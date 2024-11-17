from lib_shared.core.utils.logger._logger import _Logger
from lib_shared.core.utils.logger.logger_constants import LoggerLevel


class Logger(_Logger):
    pass


logger = Logger(level=LoggerLevel.DEBUG)
