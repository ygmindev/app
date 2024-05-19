import { type _LoggerModel } from '@lib/shared/logging/utils/logger/_logger.models';
import { pino } from 'pino';

const logger = pino({
  level: process.env.NODE_ENV === 'development' ? 'debug' : 'info',
  transport: {
    pipeline: [{ options: { colorize: true, destination: 2 }, target: 'pino-pretty' }],
  },
});

const { debug, error, info, warn }: _LoggerModel = {
  debug: (message) => logger.debug.bind(logger)(message),
  error: (message) => logger.error.bind(logger)(message),
  info: (message) => logger.info.bind(logger)(message),
  warn: (message) => logger.warn.bind(logger)(message),
};

export { debug, error, info, warn };
