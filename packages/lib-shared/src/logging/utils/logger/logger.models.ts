import type { CallableArgsModel } from '@lib/shared/core/core.models';

export type LogModel = CallableArgsModel<void>;

export interface LoggerModel {
  debug: LogModel;
  error: LogModel;
  info: LogModel;
  warn: LogModel;
}
