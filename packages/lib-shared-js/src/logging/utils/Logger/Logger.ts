import { withContainer } from '@lib/backend/core/utils/withContainer/withContainer';
import { loggingConfig } from '@lib/config/node/logging/logging';
import { Container } from '@lib/shared/core/utils/Container/Container';
import { isArray } from '@lib/shared/core/utils/isArray/isArray';
import { stringify } from '@lib/shared/core/utils/stringify/stringify';
import { _Logger } from '@lib/shared/logging/utils/Logger/_Logger';
import { type _LoggerModel } from '@lib/shared/logging/utils/Logger/_Logger.models';
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

@withContainer()
export class Logger implements LoggerModel {
  protected _logger!: _LoggerModel;

  constructor() {
    this._logger = new _Logger(loggingConfig.config());
  }

  debug: LogModel = (...params) => this._logger.debug(format(params));
  error: LogModel = (...params) => this._logger.error(format(params));
  fail: LogModel = (...params) => this._logger.error(`❌ ${format(params)}`);
  info: LogModel = (...params) => this._logger.info(format(params));
  progress: LogModel = (...params) => this._logger.info(`🕑 ${format(params)}...`);
  success: LogModel = (...params) => this._logger.info(`✅ ${format(params)}`);
  trace: LogModel = (...params) => this._logger.trace(format(params));
  warn: LogModel = (...params) => this._logger.warn(format(params));
}

export const logger: LoggerModel = {
  debug: (...params) => Container.get(Logger).debug(...params),
  error: (...params) => Container.get(Logger).error(...params),
  fail: (...params) => Container.get(Logger).error(...params),
  info: (...params) => Container.get(Logger).info(...params),
  progress: (...params) => Container.get(Logger).info(...params),
  success: (...params) => Container.get(Logger).info(...params),
  trace: (...params) => Container.get(Logger).trace(...params),
  warn: (...params) => Container.get(Logger).warn(...params),
};
