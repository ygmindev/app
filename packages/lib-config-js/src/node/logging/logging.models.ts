import { type LOGGING_LEVEL } from '@lib/shared/logging/logging.constants';
import { type LoggerOptions } from 'pino';

export type LoggingConfigModel = {
  level: LOGGING_LEVEL;

  transports?: Array<{
    options?: Record<string, unknown>;
    target: string;
  }>;

  context?(): Record<string, unknown>;
};

export type _LoggingConfigModel = LoggerOptions;
