import { type CallablePromiseModel } from '#lib-shared/core/core.models';

export type BuildJsonParamsModel = {
  filename: string;
  value: CallablePromiseModel<object>;
};
