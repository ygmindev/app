import type { CallableModel } from '@lib/shared/core/core.models';

export interface UseMountParamsModel {
  deps?: Array<unknown>;
  onMount?: CallableModel;
  onUnmount?: CallableModel;
}

export type UseMountModel = boolean;
