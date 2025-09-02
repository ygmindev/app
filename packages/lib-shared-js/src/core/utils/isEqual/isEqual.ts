import { _isEqual } from '@lib/shared/core/utils/isEqual/_isEqual';
import {
  type IsEqualModel,
  type IsEqualParamsModel,
} from '@lib/shared/core/utils/isEqual/isEqual.model';

export const isEqual = <TType = unknown>(...params: IsEqualParamsModel<TType>): IsEqualModel =>
  _isEqual(...params);
