import {
  type _GetValueModel,
  type _GetValueParamsModel,
} from '@lib/shared/core/utils/getValue/_getValue.models';

export type GetValueParamsModel<
  TType,
  TPath extends string,
  TDefault = GetValueModel<TType, TPath>,
> = _GetValueParamsModel<TType, TPath, TDefault>;

export type GetValueModel<TType, TPath extends string> = _GetValueModel<TType, TPath>;
