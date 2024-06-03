import {
  type _LoggerModel,
  type _LoggerParamsModel,
  type _LogModel,
} from '@lib/shared/logging/utils/Logger/_Logger.models';
import { type Logger, pino } from 'pino';

export class _Logger implements _LoggerModel {
  protected _logger!: Logger;

  constructor({ level }: _LoggerParamsModel) {
    this._logger = pino({
      level,
      transport: {
        pipeline: [{ options: { colorize: true, destination: 2 }, target: 'pino-pretty' }],
      },
    });
  }

  debug: _LogModel = this._logger.debug;
  error: _LogModel = this._logger.error;
  info: _LogModel = this._logger.info;
  trace: _LogModel = this._logger.trace;
  warn: _LogModel = this._logger.warn;
}
