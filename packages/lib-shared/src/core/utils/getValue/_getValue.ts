import {
  type _GetValueModel,
  type _GetValueParamsModel,
} from '@lib/shared/core/utils/getValue/_getValue.models';
import get from 'lodash/get';

export const _getValue = <TType, TPath extends string, TDefault = _GetValueModel<TType, TPath>>(
  ...[data, path, defaultValue]: _GetValueParamsModel<TType, TPath, TDefault>
): _GetValueModel<TType, TPath> | TDefault =>
  get(data, path, defaultValue) as _GetValueModel<TType, TPath> | TDefault;
