import { type ArrayCallableModel } from '#lib-shared/core/core.models';

export type LogModel = ArrayCallableModel<void, Array<unknown>>;

export type LoggerModel = {
  debug: LogModel;
  error: LogModel;
  info: LogModel;
  warn: LogModel;
};
