import type { CallablePromiseModel } from '#lib-shared/core/core.models';

export interface BuildJsonParamsModel {
  filename: string;
  value: CallablePromiseModel<object>;
}
