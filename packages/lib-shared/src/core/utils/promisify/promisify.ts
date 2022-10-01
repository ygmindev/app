import type { CallableModel } from '@lib/shared/core/core.models';

export const promisify =
  <TParams extends Array<unknown> = never, TResult = void>(
    cb: CallableModel<TParams, TResult>,
  ): CallableModel<TParams, Promise<TResult>> =>
  (...params) => {
    const result = cb(...params);
    return result instanceof Promise ? result : Promise.resolve(result);
  };
