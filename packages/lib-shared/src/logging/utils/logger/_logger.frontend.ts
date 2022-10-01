import type { _LoggerModel } from '@lib/shared/logging/utils/logger/_logger.models';

const _loggerCache = console;

const { _debug, _error, _info, _toggle, _warn }: _LoggerModel = {
  /* eslint-disable no-console */
  _debug: console.debug,
  _error: console.error,
  _info: console.info,
  _toggle: (toggle) => {
    if (toggle) {
      console.log = _loggerCache.log;
      console.debug = _loggerCache.debug;
      console.error = _loggerCache.error;
      console.info = _loggerCache.info;
      console.warn = _loggerCache.warn;
    } else {
      console.log = () => null;
      console.debug = () => null;
      console.error = () => null;
      console.info = () => null;
      console.warn = () => null;
    }
  },
  _warn: console.warn,
  /* eslint-enable no-console */
};

export { _debug, _error, _info, _toggle, _warn };
