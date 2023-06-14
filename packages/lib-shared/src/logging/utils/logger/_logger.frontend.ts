import type { _LoggerModel } from '#lib-shared/logging/utils/logger/_logger.models';

const { _debug, _error, _info, _warn }: _LoggerModel = {
  /* eslint-disable no-console */
  _debug: console.debug,
  _error: console.error,
  _info: console.info,
  _warn: console.warn,
  /* eslint-enable no-console */
};

export { _debug, _error, _info, _warn };
