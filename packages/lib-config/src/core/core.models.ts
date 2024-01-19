import { type ReturnTypeModel } from '@lib/shared/core/core.models';

export type ConfigModuleModel<TParams, TResult = undefined> = {
  _config: TResult extends undefined ? undefined : ReturnTypeModel<TResult>;
  config: ReturnTypeModel<TParams>;
};
