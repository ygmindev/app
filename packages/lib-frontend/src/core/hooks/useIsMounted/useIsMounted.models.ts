import type { CallableModel } from '@lib/shared/core/core.models';

export interface UseIsMountedParamsModel {
  onMount?: CallableModel;
  onUnmount?: CallableModel;
}
