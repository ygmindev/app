import { stringify } from '@lib/shared/core/utils/stringify/stringify';
import { _debug, _error, _info, _warn } from '@lib/shared/logging/utils/logger/_logger';
import type { LoggerModel } from '@lib/shared/logging/utils/logger/logger.models';
import { isPlainObject } from 'lodash';

const _stringify = (params: Array<unknown>): Array<unknown> =>
  params.map((value) => (isPlainObject(value) ? stringify(value as object) : value));

const { debug, error, info, warn }: LoggerModel = {
  debug: (...params) => _debug(..._stringify(params)),
  error: (...params) => _error(..._stringify(params)),
  info: (...params) => _info(..._stringify(params)),
  warn: (...params) => _warn(..._stringify(params)),
};

export { debug, error, info, warn };
