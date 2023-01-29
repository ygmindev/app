import type { CallableModel } from '@lib/shared/core/core.models';

export type UseMountParamsModel = [
  {
    onMount?: CallableModel;
    onUnmount?: CallableModel;
  }?,
  Array<unknown>?,
];

export type UseMountModel = boolean;
