import { _toPlainObject } from '@lib/shared/core/utils/toPlainObject/_toPlainObject';
import {
  type ToPlainObjectModel,
  type ToPlainObjectParamsModel,
} from '@lib/shared/core/utils/toPlainObject/toPlainObject.models';

export const toPlainObject = <TType extends unknown>(
  params: ToPlainObjectParamsModel<TType>,
): ToPlainObjectModel<TType> => _toPlainObject<TType>(params);
