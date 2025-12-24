import {
  type _LoggingConfigModel,
  type LoggingCustomLevelModel,
} from '@lib/config/node/logging/logging.models';
import { type StringKeyModel } from '@lib/shared/core/core.models';
import { type LogArgsModel } from '@lib/shared/logging/utils/Logger/Logger.models';

export type _LoggerParamsModel = _LoggingConfigModel;

export type _LoggerModel = {
  debug(params: LogArgsModel): void;

  error(params: LogArgsModel): void;

  info(params: LogArgsModel): void;

  trace(params: LogArgsModel): void;

  warn(params: LogArgsModel): void;
} & {
  [TKey in StringKeyModel<LoggingCustomLevelModel>]: (params: LogArgsModel) => void;
};
