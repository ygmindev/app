import { type _LoggingConfigModel } from '@lib/config/node/logging/logging.models';

export type _LoggerParamsModel = _LoggingConfigModel;

export type _LoggerModel = {
  debug: _LogModel;
  error: _LogModel;
  info: _LogModel;
  trace: _LogModel;
  warn: _LogModel;
};

export type _LogModel = (...params: Array<string>) => void;
