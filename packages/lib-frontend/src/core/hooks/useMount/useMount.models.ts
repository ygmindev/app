import type { CallableModel } from '@lib/shared/core/core.models';

export interface UseMountParamsModel {
  onMount?: CallableModel;
  onUnmount?: CallableModel;
}
