import {
  type _LoggerModel,
  type _LoggerParamsModel,
} from '@lib/shared/logging/utils/Logger/_Logger.models';
import { type LogArgsModel } from '@lib/shared/logging/utils/Logger/Logger.models';
import { type Logger } from 'pino';
import pino from 'pino';

export class _Logger implements _LoggerModel {
  protected _logger!: Logger;

  constructor(params: _LoggerParamsModel) {
    this._logger = pino(params);
  }

  debug(params: LogArgsModel, ...rest: Array<LogArgsModel>): void {
    this._logger.debug(params, ...(rest as Array<never>));
  }

  error(params: LogArgsModel, ...rest: Array<LogArgsModel>): void {
    this._logger.error(params, ...(rest as Array<never>));
  }

  info(params: LogArgsModel, ...rest: Array<LogArgsModel>): void {
    this._logger.info(params, ...(rest as Array<never>));
  }

  trace(params: LogArgsModel, ...rest: Array<LogArgsModel>): void {
    this._logger.trace(params, ...(rest as Array<never>));
  }

  warn(params: LogArgsModel, ...rest: Array<LogArgsModel>): void {
    this._logger.warn(params, ...(rest as Array<never>));
  }
}
