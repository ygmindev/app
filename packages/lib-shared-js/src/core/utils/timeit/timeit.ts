import {
  type TimeitModel,
  type TimeitParamsModel,
} from '@lib/shared/core/utils/timeit/timeit.models';
import { logger } from '@lib/shared/logging/utils/Logger/Logger';

const now = (): number => {
  if (typeof performance !== 'undefined' && performance.now) {
    return performance.now();
  }
  return Date.now();
};

export const timeit = <TType extends (() => unknown) | (() => Promise<unknown>)>(
  ...[fn, isVerbose = true]: TimeitParamsModel<TType>
): TimeitModel<TType> => {
  const start = now();
  const result = fn();
  if (result instanceof Promise) {
    return result.then((r) => {
      const duration = now() - start;
      isVerbose && logger.info(`${fn.name} took ${duration.toFixed(3)} ms`);
      return [r, duration];
    }) as TimeitModel<TType>;
  }
  const duration = now() - start;
  isVerbose && logger.info(`${fn.name} took ${duration.toFixed(3)} ms`);
  return [result, duration] as TimeitModel<TType>;
};
