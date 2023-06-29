import { type CallableModel } from '#lib-shared/core/core.models';

export type WaitForParamsModel = {
  condition: CallableModel<boolean>;
  interval?: number;
  timeout?: number;
};
