import { dateTimeFormat } from '@lib/shared/locale/utils/dateTimeFormat/dateTimeFormat';
import { DATE_TIME_FORMAT_TYPE } from '@lib/shared/locale/utils/dateTimeFormat/dateTimeFormat.constants';
import { _toggle as _toggleFrontend } from '@lib/shared/logging/utils/logger/_logger.frontend';
import type { _LoggerModel } from '@lib/shared/logging/utils/logger/_logger.models';
import type { Logger } from 'winston';
import { createLogger, format, transports } from 'winston';

const _enumerateErrorFormat = format((info) => {
  if (info instanceof Error) {
    Object.assign(info, { message: info.stack });
  }
  return info;
});

const logger: Logger = createLogger({
  format: format.combine(
    _enumerateErrorFormat(),
    format.colorize(),
    format.splat(),
    format.printf(
      ({ level, message }: { level: string; message: string }) =>
        `[${dateTimeFormat({
          format: DATE_TIME_FORMAT_TYPE.DATE_TIME_SECONDS_SHORT,
        })}] ${level}: ${message}`,
    ),
  ),
  level: 'info',
  transports: [new transports.Console({ stderrLevels: ['error'] })],
});

const _loggerCache: Logger = logger;

const { _debug, _error, _info, _toggle, _warn }: _LoggerModel = {
  _debug: (message) => logger.debug.bind(logger)(message),
  _error: (message) => logger.error.bind(logger)(message),
  _info: (message) => logger.info.bind(logger)(message),
  _toggle: (toggle) => {
    _toggleFrontend(toggle);
    if (toggle) {
      logger.log = _loggerCache.log;
      logger.debug = _loggerCache.debug;
      logger.error = _loggerCache.error;
      logger.info = _loggerCache.info;
      logger.warn = _loggerCache.warn;
    } else {
      logger.log = () => logger;
      logger.debug = () => logger;
      logger.error = () => logger;
      logger.info = () => logger;
      logger.warn = () => logger;
    }
  },
  _warn: (message) => logger.warn.bind(logger)(message),
};

export { _debug, _error, _info, _toggle, _warn };
