import {
  type UpdateArrayModel,
  type UpdateArrayParamsModel,
} from '@lib/shared/core/utils/updateArray/updateArray.models';
import clone from 'lodash/clone';
import isNumber from 'lodash/isNumber';

export const updateArray = <TType extends unknown>(
  ...[value, selector, update, { isClone = true } = {}]: UpdateArrayParamsModel<TType>
): UpdateArrayModel<TType> => {
  const valueF = value ? (isClone ? clone(value) : value) : [];
  const index = isNumber(selector) ? selector : valueF.findIndex(selector);
  if (index >= 0) {
    valueF[index] = update(valueF[index]);
  }
  return valueF;
};
