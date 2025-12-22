import { type LoggingCustomLevelModel } from '@lib/config/node/logging/logging.models';
import { type StringKeyModel } from '@lib/shared/core/core.models';
import {
  type _LoggerModel,
  type _LoggerParamsModel,
} from '@lib/shared/logging/utils/Logger/_Logger.models';
import { type LogArgsModel } from '@lib/shared/logging/utils/Logger/Logger.models';
import { type Logger } from 'pino';
import pino from 'pino';

export class _Logger implements _LoggerModel {
  protected _logger!: Logger<StringKeyModel<LoggingCustomLevelModel>>;

  constructor(params: _LoggerParamsModel) {
    this._logger = pino(params);
  }

  debug(params: LogArgsModel): void {
    this._logger.debug(params);
  }

  error(params: LogArgsModel): void {
    this._logger.error(params);
  }

  fail(params: LogArgsModel): void {
    this._logger.fail(`❌ ${params as string}`);
  }

  info(params: LogArgsModel): void {
    this._logger.info(params);
  }

  progress(params: LogArgsModel): void {
    this._logger.progress(`🕑 ${params as string}`);
  }

  success(params: LogArgsModel): void {
    this._logger.success(`✅ ${params as string}`);
  }

  trace(params: LogArgsModel): void {
    this._logger.trace(params);
  }

  warn(params: LogArgsModel): void {
    this._logger.warn(params);
  }
}
