import { _getValue } from '@lib/shared/core/utils/getValue/_getValue';
import {
  type GetValueModel,
  type GetValueParamsModel,
} from '@lib/shared/core/utils/getValue/getValue.models';

export const getValue = <TType, TPath extends string, TDefault = GetValueModel<TType, TPath>>(
  ...params: GetValueParamsModel<TType, TPath, TDefault>
): GetValueModel<TType, TPath> | TDefault =>
  _getValue(...params) as GetValueModel<TType, TPath> | TDefault;
