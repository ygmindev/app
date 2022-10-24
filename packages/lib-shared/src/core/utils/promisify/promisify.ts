import type { CallableModel } from '@lib/shared/core/core.models';

export const promisify =
  <TParams extends Array<unknown> = never, TResult = void>(
    cb: CallableModel<TResult, TParams>,
  ): CallableModel<Promise<TResult>, TParams> =>
  (...params) => {
    const result = cb(...params);
    return result instanceof Promise ? result : Promise.resolve(result);
  };
