import { dateTimeFormat } from '@lib/shared/data/utils/dateTimeFormat/dateTimeFormat';
import { DATE_TIME_FORMAT_TYPE } from '@lib/shared/data/utils/dateTimeFormat/dateTimeFormat.constants';
import { type _LoggerModel } from '@lib/shared/logging/utils/logger/_logger.models';
import { type Logger } from 'winston';
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
        `[${dateTimeFormat(new Date(), DATE_TIME_FORMAT_TYPE.DATE_TIME_SECONDS_SHORT)}] ${level}: ${message}`,
    ),
  ),
  level: process.env.NODE_ENV === 'development' ? 'debug' : 'info',
  transports: [new transports.Console({ stderrLevels: ['error'] })],
});

const { debug, error, info, warn }: _LoggerModel = {
  debug: (message) => logger.debug.bind(logger)(message),
  error: (message) => logger.error.bind(logger)(message),
  info: (message) => logger.info.bind(logger)(message),
  warn: (message) => logger.warn.bind(logger)(message),
};

export { debug, error, info, warn };
