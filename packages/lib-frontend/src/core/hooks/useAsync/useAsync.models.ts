import type { CallableModel, CallablePromiseModel } from '@lib/shared/core/core.models';

export type UseAsyncParamsModel = [
  {
    onMount?(isMounted: CallableModel<boolean>): Promise<void>;
    onUnmount?: CallablePromiseModel;
  },
  Array<unknown>?,
];

export type UseAsyncModel = void;
