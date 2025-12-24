import {
  type _LoggerModel,
  type _LoggerParamsModel,
} from '@lib/shared/logging/utils/Logger/_Logger.models';
import { type LogArgsModel } from '@lib/shared/logging/utils/Logger/Logger.models';

export class _Logger implements _LoggerModel {
  constructor(params: _LoggerParamsModel) {}

  debug(params: LogArgsModel, ...rest: Array<LogArgsModel>): void {
    console.debug(params, ...rest);
  }

  error(params: LogArgsModel, ...rest: Array<LogArgsModel>): void {
    console.error(params, ...rest);
  }

  info(params: LogArgsModel, ...rest: Array<LogArgsModel>): void {
    console.info(params, ...rest);
  }

  trace(params: LogArgsModel, ...rest: Array<LogArgsModel>): void {
    console.trace(params, ...rest);
  }

  warn(params: LogArgsModel, ...rest: Array<LogArgsModel>): void {
    console.warn(params, ...rest);
  }
}
