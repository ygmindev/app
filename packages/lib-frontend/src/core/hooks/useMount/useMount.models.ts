import type { CallablePromiseModel } from '@lib/shared/core/core.models';

export type UseMountParamsModel = [
  {
    onMount?(isMounted: () => boolean): Promise<void>;
    onUnmount?: CallablePromiseModel;
  },
  Array<unknown>?,
];

export type UseMountModel = void;
