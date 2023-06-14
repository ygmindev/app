import { dateTimeFormat } from '#lib-shared/format/utils/dateTimeFormat/dateTimeFormat';
import { DATE_TIME_FORMAT_TYPE } from '#lib-shared/format/utils/dateTimeFormat/dateTimeFormat.constants';
import type { _LoggerModel } from '#lib-shared/logging/utils/logger/_logger.models';
import type { Logger } from 'winston';
import { createLogger, format, transports } from 'winston';

const enumerateErrorFormat = format((info) => {
  if (info instanceof Error) {
    Object.assign(info, { message: info.stack });
  }
  return info;
});

const logger: Logger = createLogger({
  format: format.combine(
    enumerateErrorFormat(),
    format.colorize(),
    format.splat(),
    format.printf(
      ({ level, message }: { level: string; message: string }) =>
        `[${dateTimeFormat({
          format: DATE_TIME_FORMAT_TYPE.DATE_TIME_SECONDS_SHORT,
        })}] ${level}: ${message}`,
    ),
  ),
  level: process.env.NODE_ENV === 'development' ? 'debug' : 'info',
  transports: [new transports.Console({ stderrLevels: ['error'] })],
});

const { _debug, _error, _info, _warn }: _LoggerModel = {
  _debug: (message) => logger.debug.bind(logger)(message),
  _error: (message) => logger.error.bind(logger)(message),
  _info: (message) => logger.info.bind(logger)(message),
  _warn: (message) => logger.warn.bind(logger)(message),
};

export { _debug, _error, _info, _warn };
