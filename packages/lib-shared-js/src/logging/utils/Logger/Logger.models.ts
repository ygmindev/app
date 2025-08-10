import { type _LoggerParamsModel } from '@lib/shared/logging/utils/Logger/_Logger.models';

export type LoggerParamsModel = _LoggerParamsModel;

export type LoggerModel = {
  debug: LogModel;
  error: LogModel;
  info: LogModel;
  raise: LogModel;
  success: LogModel;
  trace: LogModel;
  warn: LogModel;
};

export type LogModel = (...params: Array<unknown>) => void;
