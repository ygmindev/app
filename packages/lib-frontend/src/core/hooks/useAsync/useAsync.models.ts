import { type CallableModel, type CallablePromiseModel } from '#lib-shared/core/core.models';

export type UseAsyncParamsModel = [
  params: (isMounted: CallableModel<boolean>) => Promise<void>,
  deps?: Array<unknown>,
  onUnmount?: CallablePromiseModel,
];

export type UseAsyncModel = void;
