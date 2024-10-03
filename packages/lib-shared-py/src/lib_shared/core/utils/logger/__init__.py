from lib_shared.core.utils.logger._logger import _Logger
from lib_shared.core.utils.logger.logger_constants import LOGGER_LEVEL


class Logger(_Logger):
    pass


logger = Logger(level=LOGGER_LEVEL.DEBUG)
