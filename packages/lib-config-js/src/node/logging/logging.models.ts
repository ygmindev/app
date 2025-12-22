import { type StringKeyModel } from '@lib/shared/core/core.models';
import { type LOGGING_LEVEL } from '@lib/shared/logging/logging.constants';
import { type LoggerOptions } from 'pino';

export type LoggingConfigModel = {
  level: LOGGING_LEVEL;

  levels: LoggingCustomLevelModel;

  transports?: Array<{
    options?: Record<string, unknown>;
    target: string;
  }>;

  context?(): Record<string, unknown>;
};

export type _LoggingConfigModel = LoggerOptions<StringKeyModel<LoggingCustomLevelModel>>;

export type LoggingCustomLevelModel = {
  fail: number;
  progress: number;
  success: number;
};
