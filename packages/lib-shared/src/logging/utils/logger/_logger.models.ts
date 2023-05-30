import type { LogModel } from '@lib/shared/logging/utils/logger/logger.models';

export interface _LoggerModel {
  _debug: LogModel;
  _error: LogModel;
  _info: LogModel;
  _warn: LogModel;
}
