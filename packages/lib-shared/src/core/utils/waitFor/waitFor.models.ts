import type { CallableModel } from '@lib/shared/core/core.models';

export interface WaitForParamsModel {
  condition: CallableModel<never, boolean>;
  interval?: number;
  timeout?: number;
}
