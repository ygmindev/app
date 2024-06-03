import { stringify } from '@lib/shared/core/utils/stringify/stringify';
import {
  type _LoggerModel,
  type _LoggerParamsModel,
} from '@lib/shared/logging/utils/Logger/_Logger.models';
import { _Logger } from '@lib/shared/logging/utils/Logger/_Logger.node';
import { type LoggerModel, type LogModel } from '@lib/shared/logging/utils/Logger/Logger.models';
import isArray from 'lodash/isArray';
import isPlainObject from 'lodash/isPlainObject';

const stringifyF = (params: Array<unknown>): string =>
  params
    .map((value) =>
      isPlainObject(value)
        ? stringify(value as object)
        : isArray(value)
          ? value.map((v) => stringifyF([v]))
          : value,
    )
    .join(' ');

class Logger implements LoggerModel {
  protected _logger!: _LoggerModel;

  constructor(params: _LoggerParamsModel) {
    this._logger = new _Logger(params);
  }

  debug: LogModel = (...params) => this._logger.debug(stringifyF(params));
  error: LogModel = (...params) => this._logger.error(stringifyF(params));
  info: LogModel = (...params) => this._logger.info(stringifyF(params));
  trace: LogModel = (...params) => this._logger.trace(stringifyF(params));
  warn: LogModel = (...params) => this._logger.warn(stringifyF(params));
}

export const logger = new Logger({
  level: process.env.NODE_ENV === 'development' ? 'debug' : 'info',
});
