import { type LogModel } from '@lib/shared/logging/utils/logger/logger.models';

export type _LoggerModel = {
  debug: LogModel;
  error: LogModel;
  info: LogModel;
  warn: LogModel;
};
