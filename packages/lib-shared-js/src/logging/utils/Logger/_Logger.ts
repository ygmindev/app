import {
  type _LoggerModel,
  type _LoggerParamsModel,
  type _LogModel,
} from '@lib/shared/logging/utils/Logger/_Logger.models';
import { type Logger } from 'pino';
import pino from 'pino';

export class _Logger implements _LoggerModel {
  protected _logger!: Logger;

  constructor(params: _LoggerParamsModel) {
    this._logger = pino(params);
  }

  debug: _LogModel = (args) => this._logger.debug(args);
  error: _LogModel = (args) => this._logger.error(args);
  info: _LogModel = (args) => this._logger.info(args);
  trace: _LogModel = (args) => this._logger.trace(args);
  warn: _LogModel = (args) => this._logger.warn(args);
}
