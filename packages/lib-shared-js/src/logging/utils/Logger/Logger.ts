import { isArray } from '@lib/shared/core/utils/isArray/isArray';
import { stringify } from '@lib/shared/core/utils/stringify/stringify';
import { _Logger } from '@lib/shared/logging/utils/Logger/_Logger';
import {
  type _LoggerModel,
  type _LoggerParamsModel,
} from '@lib/shared/logging/utils/Logger/_Logger.models';
import { type LoggerModel, type LogModel } from '@lib/shared/logging/utils/Logger/Logger.models';
import isPlainObject from 'lodash/isPlainObject';

const format = (params: Array<unknown>): string => {
  const formatted = params
    .map((value) =>
      value instanceof Error
        ? `Error: ${value}`
        : isPlainObject(value)
          ? stringify(value)
          : isArray(value)
            ? value.map((v) => format([v]))
            : value,
    )
    .join('\n');
  return `[${new Date().toISOString()}] ${formatted}`;
};

class Logger implements LoggerModel {
  protected _logger!: _LoggerModel;

  constructor(params: _LoggerParamsModel) {
    this._logger = new _Logger(params);
  }

  debug: LogModel = (...params) => this._logger.debug(format(params));
  error: LogModel = (...params) => this._logger.error(format(params));
  fail: LogModel = (...params) => this._logger.error(`❌ ${format(params)}`);
  info: LogModel = (...params) => this._logger.info(format(params));
  progress: LogModel = (...params) => this._logger.info(`⏳ ${format(params)}...`);
  success: LogModel = (...params) => this._logger.info(`✅ ${format(params)}`);
  trace: LogModel = (...params) => this._logger.trace(format(params));
  warn: LogModel = (...params) => this._logger.warn(format(params));
}

export const logger = new Logger({
  level: process.env.NODE_ENV === 'production' ? 'info' : 'debug',
});
