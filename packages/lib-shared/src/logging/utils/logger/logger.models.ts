import type { CallableArgsModel } from '#lib-shared/core/core.models';

export type LogModel = CallableArgsModel<void, Array<unknown>>;

export type LoggerModel = {
  debug: LogModel;
  error: LogModel;
  info: LogModel;
  warn: LogModel;
};
