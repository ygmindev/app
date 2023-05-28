import type { CallablePromiseModel } from '@lib/shared/core/core.models';

export interface MakeJsonParamsModel {
  filename: string;
  value: CallablePromiseModel<object>;
}
