import { type OptionalCallableModel } from '#lib-shared/core/core.models';

export type WaitForParamsModel = {
  condition: OptionalCallableModel<boolean>;
  interval?: number;
  timeout?: number;
};
