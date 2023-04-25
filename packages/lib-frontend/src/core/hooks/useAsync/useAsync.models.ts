import type { CallablePromiseModel } from '@lib/shared/core/core.models';

export type UseAsyncParamsModel = [
  {
    onMount?(isMounted: () => boolean): Promise<void>;
    onUnmount?: CallablePromiseModel;
  },
  Array<unknown>?,
];

export type UseAsyncModel = void;
