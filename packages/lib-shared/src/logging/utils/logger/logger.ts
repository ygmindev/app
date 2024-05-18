import { stringify } from '@lib/shared/core/utils/stringify/stringify';
import {
  debug as _debug,
  error as _error,
  info as _info,
  warn as _warn,
} from '@lib/shared/logging/utils/logger/_logger';
import { type LoggerModel } from '@lib/shared/logging/utils/logger/logger.models';
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

const { debug, error, info, warn }: LoggerModel = {
  debug: (...params) => _debug(stringifyF(params)),
  error: (...params) => _error(stringifyF(params)),
  info: (...params) => _info(stringifyF(params)),
  warn: (...params) => _warn(stringifyF(params)),
};

export { debug, error, info, warn };
