import { type _LoggingConfigModel } from '@lib/config/node/logging/logging.models';
import { type LogArgsModel } from '@lib/shared/logging/utils/Logger/Logger.models';

export type _LoggerParamsModel = _LoggingConfigModel;

export type _LoggerModel = {
  debug(params: LogArgsModel, ...rest: Array<LogArgsModel>): void;

  error(params: LogArgsModel, ...rest: Array<LogArgsModel>): void;

  info(params: LogArgsModel, ...rest: Array<LogArgsModel>): void;

  trace(params: LogArgsModel, ...rest: Array<LogArgsModel>): void;

  warn(params: LogArgsModel, ...rest: Array<LogArgsModel>): void;
};
