import { type _LoggerModel } from '@lib/shared/logging/utils/logger/_logger.models';

const { debug, error, info, warn }: _LoggerModel = {
  /* eslint-disable no-console */
  debug: console.debug,
  error: console.error,
  info: console.info,
  warn: console.warn,
  /* eslint-enable no-console */
};

export { debug, error, info, warn };
