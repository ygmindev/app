import { type CallableModel } from '@lib/shared/core/core.models';
import { logger } from '@lib/shared/logging/utils/Logger/Logger';

const now = (): number => {
  if (typeof performance !== 'undefined' && performance.now) {
    return performance.now();
  }
  return Date.now();
};

export const timeit = <TType extends CallableModel>(fn: TType): TType => {
  const wrapped = (...args: Parameters<TType>): ReturnType<TType> => {
    const start = now();
    const result = fn(...args);
    if (result instanceof Promise) {
      return result.then((res) => {
        const end = now();
        logger.info(`${fn.name} took ${(end - start).toFixed(3)} ms`);
        return res as Awaited<ReturnType<TType>>;
      }) as ReturnType<TType>;
    } else {
      const end = now();
      logger.info(` ${fn.name} took ${(end - start).toFixed(3)} ms`);
      return result as ReturnType<TType>;
    }
  };
  Object.defineProperty(wrapped, 'name', { value: fn.name });
  return wrapped as TType;
};
